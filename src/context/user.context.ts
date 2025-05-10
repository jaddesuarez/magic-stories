import { TUser } from "@/types/index.type";

import { atom } from "jotai";

export const userAtom = atom<TUser | null>(null);
