"use client";

import { useRouter } from "next/navigation";
import ShortlistPopup from "./ShortlistPopup";

export default function GetShortlistClient() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-50">
      <ShortlistPopup open={true} onClose={() => router.push("/")} />
    </main>
  );
}