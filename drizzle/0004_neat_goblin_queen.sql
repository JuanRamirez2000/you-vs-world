DO $$ BEGIN
 CREATE TYPE "currentPlayer" AS ENUM('w', 'b');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DROP TABLE "game";--> statement-breakpoint
ALTER TABLE "gameRoom" DROP CONSTRAINT "gameRoom_hostId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "gameRoom" ADD COLUMN "currentGameState" text;--> statement-breakpoint
ALTER TABLE "gameRoom" ADD COLUMN "currentPlayer" "char" DEFAULT 'w';