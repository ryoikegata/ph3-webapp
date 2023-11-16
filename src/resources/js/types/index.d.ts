import { types } from "util";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};


export type Study = {
  user_id: number;
  content_id: number;
  language_id: number;
  hours: number;
  created_at: Date;
}

export type Language = {
  id : number;
  language: string;
}

export type Content = {
  id: number;
  content: string;
}
