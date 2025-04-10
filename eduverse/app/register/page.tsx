'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
const RegisterPage = () => {
  const router = useRouter();
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-eduverse px-4">
      <h1 className="text-white text-4xl font-bold mb-6">EduVerse</h1>

      <div className="bg-white rounded-3xl p-6 w-full max-w-sm">
        {/* Tabs */}
        <div className="flex border rounded-full overflow-hidden mb-6">
          <Link href="/login" className="flex-1 text-center py-2 text-sm font-medium text-gray-500">
            Login
          </Link>
          <button className="flex-1 py-2 text-sm font-medium bg-[#E3D3F8] text-purple-900">✓ Register</button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              className="mt-1 w-full rounded-full bg-[#DADCEE] px-4 py-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 w-full rounded-full bg-[#DADCEE] px-4 py-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm password</label>
            <input
              type="password"
              className="mt-1 w-full rounded-full bg-[#DADCEE] px-4 py-2 focus:outline-none"
            />
          </div>


          <button
            type="submit"
            className="w-full bg-[#1D2A94] text-white py-2 rounded-full font-semibold mt-2"
            onClick={() => router.push('/register/setup')}>
           Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
