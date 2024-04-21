import { User } from "@clerk/nextjs/server";
import { inngest } from "./client";
import { db } from "@/db/db";
import { users } from "@/db/schema";

const syncUser = inngest.createFunction(
  { id: "sync-user-from-clerk" }, // ←The 'id' is an arbitrary string used to identify the function in the dashboard
  { event: "clerk/user.created" },
  async ({ event }) => {
    const user = event.data as User;
    const { id } = user;
    await db.insert(users).values({ id: id });
  }
);
