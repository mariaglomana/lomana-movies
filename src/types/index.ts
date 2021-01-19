//USER
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
  
export type UserKey = keyof User;

interface UserDataAPIResponse {
  user: User;
  token: string;
}

export interface UserAPIResponse {
  success: boolean;
  data?: UserDataAPIResponse;
  error?: string;
}

//MOVIES
export interface APIMovieData {
  "id": string;
  "title": string;
  "year": number;
  "published_at": string;
  "duration": number;
  "country": string;
  "language": string;
  "director": string;
  "description": string;
  "budget": number | null;
  "gross_income": number | null;
  "url": string;
  "poster_url": string;
}

export type MovieData = Omit<APIMovieData, "budget" | "gross_income" | "url">;
export type MoviePreviewData = Pick<APIMovieData, "id"| "title"| "year"| "poster_url">;

export type MovieDataKey = keyof MovieData;




//NAVIGATION
export type NavKeys = "profile" | "search" | "rate" ;

