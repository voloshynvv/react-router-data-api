import { useId } from 'react';
import { Form, useSearchParams } from 'react-router';
import { twMerge } from 'tailwind-merge';

import { Button } from '@/components/ui/button';

import { useAppNavigation } from '@/hooks/useAppNavigation';
import { SearchParams } from '@/types/common';

export const SearchForm = () => {
  const searchId = useId();
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
        <input
          className="w-full rounded bg-white px-2 py-1 shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
          id={searchId}
          name="query"
          type="search"
          placeholder="Search"
          aria-label="search contacts"
          defaultValue={query}
          required
          onChange={handleChange}
          disabled={isSubmitting}
        />

        <Button type="submit">Search</Button>
      </Form>
    </search>
  );
};
