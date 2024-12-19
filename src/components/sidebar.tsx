import { Form } from 'react-router';

import { SearchForm } from '@/components/search-form';
import { Button } from '@/components/ui/button';
import { UsersList } from '@/components/users-list';

import { useAppNavigation } from '@/hooks/useAppNavigation';

export const Sidebar = () => {
  const { isSubmitting } = useAppNavigation();

  return (
    <aside className="flex h-screen flex-col border bg-gray-100">
      <div className="border-b p-4 px-6">
        <SearchForm />
      </div>

      <div className="flex-1 overflow-auto p-4">
        <UsersList />
      </div>

      <Form method="post" className="border-b p-4 px-6">
        <Button type="submit" fullWidth isLarge variant="secondary" disabled={isSubmitting}>
          Create New
        </Button>
      </Form>
    </aside>
  );
};
