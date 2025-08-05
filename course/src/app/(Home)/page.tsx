// app/components/LandingPage.tsx

import Image from "next/image";
import { courseDetails } from "@/lib/course_data";
import Link from "next/link";

export default function CourseDetails() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-6">
      {/* Main Container */}
      
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Hero Section */}
        <div className="bg-white px-6 py-8 md:py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Side: Text */}
            <div className="flex-1 space-y-4">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                {courseDetails.title}
              </h1>
              <p className="text-lg text-gray-700">{courseDetails.description}</p>

              {/* Rating & Stats */}
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className="flex items-center">
                  ⭐⭐⭐⭐⭐ <span className="ml-1">(5.0 Rating)</span>
                </span>
                <span>•</span>
                <span>All Levels</span>
                <span>•</span>
                <span>{courseDetails.duration}</span>
              </div>

              {/* What You Get */}
              <div className="flex flex-wrap gap-3 mt-4 text-sm text-gray-700">
                <span>✅ Lifetime access</span>
                <span>✅ Certificate of completion</span>
                <span>✅ 7-day free trial</span>
                <span>✅ Full refund if not satisfied</span>
              </div>

              {/* Price & CTA */}
              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-gray-900">{courseDetails.price}</span>
                  <span className="text-lg text-gray-500 line-through">{courseDetails.originalPrice}</span>
                </div>
               <Link href={"/registration"} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-lg transition">
                  Enroll Now
                </button>
               </Link>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                * Pay only after 7-day free trial if you continue.
              </p>
            </div>

            {/* Right Side: Image */}
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <div className="w-full max-w-xs">
                <Image
                  src="/image.png"
                  alt="Course Banner"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Course Details Section */}
        <div className="border-t border-gray-200 px-6 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-blue-700 flex items-center">
                <span className="mr-2">📘</span> HTML & CSS
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                <li>Semantic HTML</li>
                <li>Forms, Inputs, Tables</li>
                <li>CSS Flexbox & Grid</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-blue-700 flex items-center">
                <span className="mr-2">📘</span> JavaScript
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                <li>Variables, Loops, Functions</li>
                <li>DOM Manipulation</li>
                <li>Events & Form Handling</li>
                <li>ES6+ Features</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-blue-700 flex items-center">
                <span className="mr-2">📘</span> React & Tailwind CSS
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                <li>Component-Based Architecture</li>
                <li>Hooks: useState, useEffect</li>
                <li>Routing with React Router</li>
                <li>Tailwind Utility Classes</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-blue-700 flex items-center">
                <span className="mr-2">📘</span> Next.js & AI Integration
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                <li>Pages, App Router, SSR</li>
                <li>API Routes & Fetching Data</li>
                <li>Using AI APIs in Projects</li>
                <li>Deployment on Vercel</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-blue-700 flex items-center">
                <span className="mr-2">📘</span> Node.js & Express
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                <li>REST API Basics</li>
                <li>Routing & Middleware</li>
                <li>Authentication with JWT</li>
                <li>Connecting with MongoDB</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-blue-700 flex items-center">
                <span className="mr-2">📘</span> MongoDB & Deployment
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                <li>Schema Design with Mongoose</li>
                <li>CRUD Operations</li>
                <li>Cloud Hosting with MongoDB Atlas</li>
                <li>Full-stack Deployment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Course Info Sidebar (like Udemy sidebar) */}
        <div className="bg-gray-50 px-6 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Content</h2>
          <div className="space-y-4">
            {[
              "HTML & CSS Fundamentals",
              "JavaScript Essentials",
              "React & Tailwind Crash Course",
              "Next.js & AI Projects",
              "Node.js & Express APIs",
              "MongoDB & Full-Stack Deployment",
            ].map((section, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600">▶️</span>
                  <span className="font-medium text-gray-800">{section}</span>
                </div>
                <span className="text-sm text-gray-500">12-15 lectures</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-blue-600 text-white text-center py-8 px-6">
          <h2 className="text-2xl font-bold">Start Your Coding Journey Today!</h2>
          <p className="mt-2 opacity-90">Learn in-demand skills with real projects and expert guidance.</p>
          <Link href={"/registration"} className="inline-block mt-4">
          <button className="mt-6 px-10 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition">
            Enroll Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}