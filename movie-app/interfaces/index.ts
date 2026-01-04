import { ReactNode } from "react";

export interface ComponentProps {
  children: ReactNode;
}

export interface ButtonProps {
  title: string;
  action?: () => void;
}

export interface MovieProps {
  id?: string;
  posterImage: string;
  releaseYear: string;
  title: string;
}

export interface MoviesProps {
  id: string;
  primaryImage: {
    url: string;
  };
  titleText: {
    text: string;
  };
  releaseYear: {
    year: string;
  };
}