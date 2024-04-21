import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default function Home() {
  const { userId }: { userId: string | null } = auth();

  return (
    <section className="size-full flex flex-col items-center">
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <button className="bg-emerald-200 px-3 py-2 rounded-md hover:scale-105 transition-all duration-150">
            <Link href={`/user/${userId}`}>Go To account</Link>
          </button>
        </SignedIn>
      </div>
    </section>
  );
}
