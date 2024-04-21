"use client";

import { useMemo } from "react";
import { Chessboard } from "react-chessboard";
import { ChessboardProps } from "react-chessboard/dist/chessboard/types";

const pieces = [
  "wP",
  "wN",
  "wB",
  "wR",
  "wQ",
  "wK",
  "bP",
  "bN",
  "bB",
  "bR",
  "bQ",
  "bK",
];

export default function ChessboardWrapper({
  position,
}: {
  position: ChessboardProps["position"];
}) {
  const customPieces = useMemo(() => {
    const pieceComponents: any = {};
    pieces.forEach((piece) => {
      pieceComponents[piece] = ({ squareWidth }: { squareWidth: string }) => (
        <div
          style={{
            width: squareWidth,
            height: squareWidth,
            backgroundImage: `url(/assets/chessPieces/${piece}.png)`,
            backgroundSize: "100%",
          }}
        />
      );
    });
    return pieceComponents;
  }, []);

  return (
    <Chessboard
      customPieces={customPieces}
      customDarkSquareStyle={{ backgroundColor: "#779952" }}
      customLightSquareStyle={{ backgroundColor: "#edeed1" }}
      position={position}
    />
  );
}
