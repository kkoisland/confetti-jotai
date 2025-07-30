import { useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";
import {
  showAtom,
  resetAtom,
  colorsAtom,
  gravityAtom,
  numberOfPiecesAtom,
} from "./store";

export const Confetti = () => {
  const { width, height } = useWindowSize();
  const show = useAtomValue(showAtom);
  const reset = useSetAtom(resetAtom);
  const colors = useAtomValue(colorsAtom);
  const gravity = useAtomValue(gravityAtom);
  const numberOfPieces = useAtomValue(numberOfPiecesAtom);

  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => reset(), 5000);
      return () => clearTimeout(timeout);
    }
  }, [show, reset]);

  return show ? (
    <ReactConfetti
      width={width}
      height={height}
      gravity={gravity}
      numberOfPieces={numberOfPieces}
      {...(colors.length > 0 ? { colors } : {})}
    />
  ) : null;
};
