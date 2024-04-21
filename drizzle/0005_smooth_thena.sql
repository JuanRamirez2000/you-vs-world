ALTER TABLE "user" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "gameRoom" ADD COLUMN "pgn" text;--> statement-breakpoint
ALTER TABLE "gameRoom" ADD COLUMN "fen" text;--> statement-breakpoint
ALTER TABLE "gameRoom" DROP COLUMN IF EXISTS "currentGameState";