export const postKeys = {
  all: ['posts'],
  getById: (id: string) => ['post', id],
  getByUser: (id: string) => ['posts', 'user', id],
  getByCategory: (id: string) => ['posts', 'category', id],
};
