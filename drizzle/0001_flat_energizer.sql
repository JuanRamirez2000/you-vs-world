CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
ALTER TABLE "gameRoom" ADD COLUMN "userId" integer;--> statement-breakpoint
ALTER TABLE "game" ADD COLUMN "roomId" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "gameRoom" ADD CONSTRAINT "gameRoom_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "game" ADD CONSTRAINT "game_roomId_user_id_fk" FOREIGN KEY ("roomId") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
