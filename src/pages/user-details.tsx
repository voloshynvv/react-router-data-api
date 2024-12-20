import { useLoaderData, LoaderFunctionArgs, Link, Form } from 'react-router';

import { Button } from '@/components/ui/button';

import { userService } from '@/services/user';
import { User } from '@/types/api';
import { routes } from '@/config/routes';

export const UserDetails = () => {
  const user = useLoaderData<User>();

  return (
    <>
      <article className="flex flex-wrap items-center gap-8">
        <img className="inline-block size-32 rounded" src={user.image} alt="avatar" />

        <div>
          <div className="flex items-center gap-x-4">
            <h2 className="mb-1 text-xl/none font-bold">
              {user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : 'name is unknown'}
            </h2>
          </div>

          <div className="mb-2">
            {user.email ? (
              <a className="hover:underline" href={`mailto:${user.email}`}>
                {user.email}
              </a>
            ) : (
              <span>email is unknown</span>
            )}
          </div>

          <div className="flex gap-x-4">
            <Button asChild>
              <Link to={routes.editUser.getHref(user.id)}>Edit</Link>
            </Button>

            <Form
              method="post"
              action="destroy"
              onSubmit={(e) => {
                if (!confirm('Are you sure?')) {
                  e.preventDefault();
                }
              }}
            >
              <Button type="submit" variant="danger">
                Delete
              </Button>
            </Form>
          </div>
        </div>
      </article>
    </>
  );
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const user = await userService.getUserById(params.id as string);

  if (!user) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }

  return user;
};
