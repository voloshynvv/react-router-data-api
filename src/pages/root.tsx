import { LoaderFunctionArgs, Outlet, redirect } from 'react-router';

import { AppBar } from '@/components/app-bar';
import { Sidebar } from '@/components/sidebar';

import { SearchParams } from '@/types/common';
import { userService } from '@/services/user';
import { User } from '@/types/api';
import { routes } from '@/config/routes';

export const Root = () => {
  return (
    <div className="md:grid md:grid-cols-[350px_1fr]">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="md:hidden">
        <AppBar />
      </div>

      <main className="mx-auto w-full max-w-4xl px-20 py-10">
        <Outlet />
      </main>
    </div>
  );
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const query = url.searchParams.get(SearchParams.Query) || '';

  const users = await userService.getUsers(query);
  return users;
};

export const action = async () => {
  const newUser = await userService.createUser();
  return redirect(routes.editUser.getHref(newUser.id));
};
