import { StudentRegisterForm } from "@/components/StudentRegisterForm";



export default function RegisterPage() {
 

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left: the form */}
      <div className="w-full  p-6 flex items-center justify-center">
        <StudentRegisterForm />
      </div>

      {/* Right: decorative image for large screens */}
      <div className=" w-full overflow-hidden">
        <img
          src="/image.png"
          alt="Register"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
}
