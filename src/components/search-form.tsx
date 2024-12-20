import { Form, useSearchParams } from 'react-router';
import { twMerge } from 'tailwind-merge';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { useAppNavigation } from '@/hooks/use-app-navigation';
import { SearchParams } from '@/types/common';

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading } = useAppNavigation();

  const query = searchParams.get(SearchParams.Query) || '';
  const isSubmitting = isLoading && Boolean(query);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value && query) {
      setSearchParams((params) => {
        params.delete(SearchParams.Query);
        return params;
      });
    }
  };

  return (
    <search>
      <Form className={twMerge('relative flex gap-x-2 transition-opacity', isSubmitting && 'opacity-50')}>
        <Input
          type="search"
          name="query"
          placeholder="Search"
          aria-label="search contacts"
          defaultValue={query}
          onChange={handleChange}
          disabled={isSubmitting}
          required
        />

        <Button type="submit">Search</Button>
      </Form>
    </search>
  );
};
