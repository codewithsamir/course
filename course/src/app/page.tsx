import { StudentRegisterForm } from "@/components/StudentRegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header for mobile */}
      <div className="lg:hidden bg-white shadow-sm border-b border-gray-200 p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Student Registration</h1>
          <p className="text-gray-600 text-sm mt-1">Join our coding community</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left: Form Section */}
        <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
          <div className="w-full max-w-2xl">
            <StudentRegisterForm />
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
          <img
            src="/image.png"
            alt="Student Registration"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
