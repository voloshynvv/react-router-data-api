import { createBrowserRouter } from 'react-router';

import { Root, loader as usersLoader, action as newUserAction } from '@/pages/root';
import { UserDetails, loader as userLoader } from '@/pages/user-details';
import { Error } from '@/pages/error';
import { EditUser, action as editUserAction } from '@/pages/edit-user';
import { action as destoyAction } from '@/pages/destroy';
import { Index } from '@/pages';

import { routes } from '@/config/routes';

export const router = createBrowserRouter([
  {
    path: routes.root.path,
    element: <Root />,
    loader: usersLoader,
    action: newUserAction,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: routes.userDetails.path,
            loader: userLoader,
            element: <UserDetails />,
          },
          {
            path: routes.destroy.path,
            action: destoyAction,
          },
          {
            path: routes.editUser.path,
            loader: userLoader,
            action: editUserAction,
            element: <EditUser />,
          },
        ],
      },
    ],
  },
]);
