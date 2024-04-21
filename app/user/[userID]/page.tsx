import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/db/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function Page({ params }: { params: { userID: string } }) {
  const { userId }: { userId: string | null } = auth();

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const user = await db.select().from(users).where(eq(users.id, userId));
  console.log(user);
  return (
    <section>
      <UserButton />
    </section>
  );
}
