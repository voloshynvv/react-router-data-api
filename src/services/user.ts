import { apiClient } from '@/libs/apiClient';
import { User } from '@/types/api';

export const userService = {
  getUsers: async (query: string) => {
    const response = await apiClient.get<User[]>(`/users`, {
      params: {
        firstName: query || null,
      },
    });
    return response.data;
  },

  getUser: async (userId: string) => {
    const response = await apiClient.get<User>(`/users/${userId}`);
    return response.data;
  },

  createUser: async () => {
    const response = await apiClient.post<User>(`/users`, {
      firstName: 'Emily new',
      lastName: 'Johnson new',
      image: 'https://dummyjson.com/icon/emilys/128',
      email: 'email@domain.com',
    });
    return response.data;
  },

  updateUser: async () => {},
};
