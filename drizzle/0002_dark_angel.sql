ALTER TABLE "gameRoom" DROP CONSTRAINT "gameRoom_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "gameRoom" ADD COLUMN "hostId" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "gameRoom" ADD CONSTRAINT "gameRoom_hostId_user_id_fk" FOREIGN KEY ("hostId") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "gameRoom" DROP COLUMN IF EXISTS "userId";