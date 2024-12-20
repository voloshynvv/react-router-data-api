import { LoaderFunctionArgs, Outlet, redirect } from 'react-router';

import { AppBar } from '@/components/app-bar';
import { Sidebar } from '@/components/sidebar';

import { SearchParams } from '@/types/common';
import { userService } from '@/services/user';
import { routes } from '@/config/routes';

export const Root = () => {
  return (
    <>
      <div className="fixed inset-0 right-auto hidden w-full max-w-80 lg:block">
        <Sidebar />
      </div>

      <div className="lg:hidden">
        <AppBar />
      </div>

      <main className="lg:pl-80">
        <div className="mx-auto max-w-4xl p-5 lg:py-10">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const query = url.searchParams.get(SearchParams.Query) || '';
  return await userService.getUsers(query);
};

export const action = async () => {
  const newUser = await userService.createUser();
  return redirect(routes.editUser.getHref(newUser.id));
};
