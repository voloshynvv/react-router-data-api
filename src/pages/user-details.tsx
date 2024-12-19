import { useLoaderData, LoaderFunctionArgs, Link } from 'react-router';
import { FaRegStar, FaStar } from 'react-icons/fa';

import { Button } from '@/components/ui/button';

import { userService } from '@/services/user';
import { User } from '@/types/api';
import { routes } from '@/config/routes';

export const UserDetails = () => {
  const user: User = useLoaderData();

  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <article className="flex items-center gap-4">
      <img className="inline-block" src={user.image} alt={`${fullName}'s avatar`} />

      <div>
        <div className="flex items-center gap-x-4">
          <h2 className="mb-1 text-xl/none font-bold">{fullName}</h2>

          <FavoriteButton isFavorite={true} />
        </div>

        <div className="mb-2">
          <a className="hover:underline" href={`mailto:${user.email}`}>
            {user.email}
          </a>
        </div>

        <div className="flex gap-x-4">
          <Button asChild>
            <Link to={routes.editUser.getHref(user.id)}>Edit</Link>
          </Button>

          <Button variant="danger">Delete</Button>
        </div>
      </div>
    </article>
  );
};

const FavoriteButton = ({ isFavorite }: { isFavorite: boolean }) => {
  return <button>{isFavorite ? <FaStar /> : <FaRegStar />}</button>;
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const user = await userService.getUser(params.id as string);
  return user;
};
