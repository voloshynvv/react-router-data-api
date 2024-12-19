import { NavLink, useLoaderData } from 'react-router';
import { twMerge } from 'tailwind-merge';

import { User } from '@/types/api';

export const UsersList = () => {
  const users = useLoaderData<User[]>();

  if (!users.length) return <p className="text-center">No users found</p>;

  return (
    <nav>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <NavLink
              className={({ isActive }) =>
                twMerge(
                  `my-1 inline-block w-full rounded px-4 py-2 transition-colors hover:bg-blue-600 hover:text-zinc-100`,
                  isActive && 'bg-blue-600 text-zinc-100',
                )
              }
              to={`/contacts/${user.id}`}
            >
              {user.firstName} {user.lastName}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
