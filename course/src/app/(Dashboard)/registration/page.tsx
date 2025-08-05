import { StudentRegisterForm } from "@/components/StudentRegisterForm";

import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* <Navigation /> */}
      
      {/* Header for mobile */}
      <div className="lg:hidden bg-white shadow-sm border-b border-gray-200 p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Student Registration</h1>
          <p className="text-gray-600 text-sm mt-1">Join our coding community</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left: Form Section */}
        <div className="flex-1 flex  justify-center p-4 ">
          <div className="w-full max-w-2xl">
            <StudentRegisterForm />
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="hidden lg:block  relative overflow-hidden">
          <Image
            src="/image.png"
            alt="Student Registration"
            className="object-cover  "
            width={700}
            height={700}
          />
          
    
        </div>
      </div>
    </div>
  );
}
