import { RouteComponentProps } from "react-router-dom";
import React from "react";
import { Theme } from "@material-ui/core/styles";

//USER
export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
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

export interface APIResponse {
  success: boolean;
  data?: UserDataAPIResponse;
  error?: string;
}

//MOVIES
export interface APIMovieData {
  id: string;
  title: string;
  year: number;
  published_at: string;
  duration: number;
  country: string;
  language: string;
  director: string;
  description: string;
  budget: number | null;
  gross_income: number | null;
  url: string;
  poster_url: string;
}
export interface MoviesQueryParams {
  page?: number;
  size?: number;
  order?: MovieDataKey;
  direction?: "asc" | "desc";
}

export type MovieData = Omit<APIMovieData, "budget" | "gross_income" | "url">;
export type MoviePreviewData = Pick<
  APIMovieData,
  "id" | "title" | "year" | "poster_url"
>;

export type MovieDataKey = keyof MovieData;

export type APIMovieDataKeys = keyof APIMovieData;
export interface dataParam {
  key: string;
  value: any;
}

//RATINGS

export const RATING_MAX_SCORE = 5;
export interface Rating {
  id: string;
  score: number;
  movie: APIMovieData;
}

//NAVIGATION
interface MovieDetailMatchParams {
  movie_id: string;
}

export type MovieDetaiMatchProps = RouteComponentProps<MovieDetailMatchParams>;

export type NavKeys = "profile" | "movies" | "rate";

export interface IRoute {
  path: string;
  component: any;
  routes?: IRoute[];
}

//THEME

export type DarkModeState = "dark" | "light";
export type SetDarkModeState = React.Dispatch<
  React.SetStateAction<DarkModeState>
>;

export type ThemeObject = Pick<Theme, "palette" | "typography">;
