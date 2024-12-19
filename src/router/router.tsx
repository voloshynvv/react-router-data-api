import { createBrowserRouter } from 'react-router';

import { Root, loader as usersLoader, action as newUserAction } from '@/pages/root';
import { UserDetails, loader as userLoader } from '@/pages/user-details';
import { Error } from '@/pages/error';
import { EditUser } from '@/pages/edit-user';

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
        path: routes.userDetails.path,
        loader: userLoader,
        element: <UserDetails />,
      },
      {
        path: routes.editUser.path,
        element: <EditUser />,
      },
    ],
  },
]);
