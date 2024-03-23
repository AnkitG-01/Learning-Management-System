"use client";

import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

import { useConfettiStore } from "@/hooks/use-confetti-store";

export const ConfettiProvider = () => {
  const confetti = useConfettiStore();
  const { width, height } = useWindowSize();

  if (!confetti.isOpen) return null;

  return (
    <Confetti
      className="pointer-events-none z-[100]"
      width={width}
      height={height}
      numberOfPieces={500}
      recycle={false}
      onConfettiComplete={() => {
        confetti.onClose();
      }}
    />
  )
}