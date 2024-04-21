"use server";
import { db } from "@/db/db";
import { gameRooms } from "@/db/schema";

export async function saveChessGame({
  gameInfo,
}: {
  gameInfo: {
    hostId: string;
    currentPlayerMove: "w" | "b";
    pgn: string;
    fen: string;
  };
}) {
  const res = await db.insert(gameRooms).values({
    hostId: gameInfo.hostId,
    currentPlayerMove: "b",
    pgn: gameInfo.pgn,
    fen: gameInfo.fen,
  });
  return res;
}
