export interface User {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  image: string;
  favorite: boolean;
}
