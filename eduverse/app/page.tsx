"use client";

import Link from "next/link";

const Page = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-eduverse">
      <h1 className="text-white text-4xl font-bold mb-8">EduVerse</h1>

      <div className="flex gap-4">
        <Link href="/login">
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-200 transition">
            Login
          </button>
        </Link>

        <Link href="/register">
          <button className="bg-transparent text-white border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
