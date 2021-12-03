import { User } from "@firebase/auth";

export interface state {
    log: boolean | null | User,
    email: string | undefined | null
  }
