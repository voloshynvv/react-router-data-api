import { ActionFunctionArgs, redirect } from 'react-router';
import { userService } from '@/services/user';
import { routes } from '@/config/routes';

export const action = async ({ params }: ActionFunctionArgs) => {
  const userId = params.id || '';
  await userService.deleteUser(userId);
  return redirect(routes.root.getHref());
};
