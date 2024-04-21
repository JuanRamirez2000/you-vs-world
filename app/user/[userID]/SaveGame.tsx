"use client";

import { saveChessGame } from "./action";

export default function SaveGameButton({
  gameInfo,
}: {
  gameInfo: {
    hostId: string;
    currentPlayerMove: "w" | "b";
    pgn: string;
    fen: string;
  };
}) {
  return (
    <button onClick={async () => await saveChessGame({ gameInfo })}>
      Save game
    </button>
  );
}
