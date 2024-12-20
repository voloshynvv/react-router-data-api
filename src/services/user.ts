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

  getUserById: async (userId: string) => {
    const response = await apiClient.get<User>(`/users/${userId}`);
    return response.data;
  },

  createUser: async () => {
    const response = await apiClient.post<User>(`/users`, {
      firstName: null,
      lastName: null,
      email: null,
      image: `https://i.pravatar.cc/256?u=${crypto.randomUUID()}`, // unique id for getting the same avatar
    });
    return response.data;
  },

  deleteUser: async (userId: string) => {
    const response = await apiClient.delete<User>(`/users/${userId}`);
    return response.data;
  },

  updateUser: async (userId: string, userDto: Pick<User, 'firstName' | 'lastName' | 'email' | 'image'>) => {
    const response = await apiClient.patch<User>(`/users/${userId}`, userDto);
    return response.data;
  },
};
