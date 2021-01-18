//User types
export interface User {
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
  }
  
export interface UserState {
    loading: boolean;
    user: User;
  }
  
export type UserField = keyof User;

interface UserDataAPIResponse {
  user: User;
  token: string;
}

export interface UserAPIResponse {
  success: boolean;
  data?: UserDataAPIResponse;
  error?: string;
}



//Navigation
export type NavKeys = "profile" | "search" | "rate" ;

