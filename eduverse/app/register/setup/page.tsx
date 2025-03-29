import Link from "next/link";

const ProfileSetup = () => {


  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="bg-blue-100 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Profile Setup</h1>
        <p className="text-center mb-6 text-gray-600">step 2 of 3...</p>

        <form >
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700" htmlFor="fullname">
                Fullname
              </label>
              <input
                type="text"
                id="fullname"
                
            
                className="w-full p-3 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your fullname"
                
              />
            </div>

            <div>
              <label className="block text-gray-700" htmlFor="dob">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
             
                className="w-full p-3 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                
              />
            </div>

            <div>
              <label className="block text-gray-700" htmlFor="major">
                Major
              </label>
              <input
                type="text"
                id="major"
                
                
                className="w-full p-3 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your major"
                
              />
            </div>
          </div>
          <Link href="/next-step" className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
                                Next
                            </Link>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetup;
