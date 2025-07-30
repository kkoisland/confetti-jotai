import { atom } from "jotai";

// 状態
export const showAtom = atom(false);
export const colorsAtom = atom<string[]>([]);
export const gravityAtom = atom(0.3);
export const numberOfPiecesAtom = atom(200);

// アクション
export const triggerAtom = atom(null, (_get, set) => {
  set(showAtom, true);
});

export const resetAtom = atom(null, (_get, set) => {
  set(showAtom, false);
});

export const setColorsAtom = atom(null, (_get, set, colors: string[]) => {
  set(colorsAtom, colors);
});

export const setGravityAtom = atom(null, (_get, set, value: number) => {
  set(gravityAtom, value);
});

export const setNumberOfPiecesAtom = atom(null, (_get, set, value: number) => {
  set(numberOfPiecesAtom, value);
});
