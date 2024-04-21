ALTER TABLE "game" DROP CONSTRAINT "game_roomId_user_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "game" ADD CONSTRAINT "game_roomId_gameRoom_id_fk" FOREIGN KEY ("roomId") REFERENCES "gameRoom"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
