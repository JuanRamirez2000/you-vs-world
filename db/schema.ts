import { relations } from "drizzle-orm";
import {
  char,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
} from "drizzle-orm/pg-core";

export const currentPlayerEnum = pgEnum("currentPlayer", ["w", "b"]);

export const users = pgTable("user", {
  id: text("id").primaryKey(),
});

export const gameRooms = pgTable("gameRoom", {
  id: serial("id").primaryKey(),
  hostId: text("hostId"),
  currentPlayerMove: char("currentPlayer", { enum: ["w", "b"] }).default("w"),
  pgn: text("pgn"),
  fen: text("fen"),
});
export const usersRelations = relations(users, ({ many }) => ({
  gameRooms: many(gameRooms),
}));

export const gameRoomRelations = relations(gameRooms, ({ one }) => ({
  host: one(users, {
    fields: [gameRooms.hostId],
    references: [users.id],
  }),
}));
