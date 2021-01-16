//User types
export interface User {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  }
  
export interface UserState {
    loading: boolean;
    user: User;
  }
  
export type UserField = keyof User;
