import { User } from "@firebase/auth";

export interface state {
    log: boolean | null | User,
    email: string | undefined | null,
    id?: string | undefined | null,
  }

export interface Note {
  title: string | unknown,
  content: string ,
  date?: string | undefined | unknown,
  edited?: string
}
