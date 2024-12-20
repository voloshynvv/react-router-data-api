import { ActionFunctionArgs, Form, Link, redirect, useLoaderData } from 'react-router';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { User } from '@/types/api';
import { userService } from '@/services/user';
import { routes } from '@/config/routes';

export const EditUser = () => {
  const user = useLoaderData<User>();

  return (
    <div>
      <Form className="space-y-6" method="post">
        <Input type="text" label="First name" name="firstName" defaultValue={user.firstName ?? ''} />
        <Input type="text" label="Last name" name="lastName" defaultValue={user.lastName ?? ''} />
        <Input type="url" label="Avatar URL" name="image" defaultValue={user.image} required />
        <Input type="email" label="Email" name="email" defaultValue={user.email ?? ''} />

        <div className="space-x-4 pl-[132px]">
          <Button type="submit">Save</Button>

          <Button variant="danger" asChild>
            <Link to=".." relative="path">
              Cancel
            </Link>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const formFields = Object.fromEntries(formData);
  const userId = params.id || '';

  await userService.updateUser(userId, formFields);
  return redirect(routes.userDetails.getHref(userId));
};
