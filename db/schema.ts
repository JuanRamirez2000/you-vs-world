import { pgTable, serial } from "drizzle-orm/pg-core";

export const gameRooms = pgTable("gameRoom", {
  id: serial("id").primaryKey(),
});

export const games = pgTable("game", {
  id: serial("id").primaryKey(),
});
