export const routes = {
  root: {
    path: '/',
    getHref: () => '/',
  },
  userDetails: {
    path: '/contacts/:id',
    getHref: (id: string) => `/contacts/${id}`,
  },
  editUser: {
    path: '/contacts/:id/edit',
    getHref: (id: string) => `/contacts/${id}/edit`,
  },
  destroy: {
    path: '/contacts/:id/destroy',
    getHref: (id: string) => `/contacts/${id}/destroy`,
  },
};
