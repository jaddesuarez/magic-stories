import { TBookSection } from "@/lib/types/index.type";

import { atom } from "jotai";

export const bookSectionAtom = atom<TBookSection | null>(null);
