
import { Card, CardContent } from "@/components/ui/card";
import {
  Stethoscope,
} from "lucide-react";
import Link from "next/link";
import SignUpFrom from '@/components/modules/Auth/SignUpFrom';

export default function SignUpPage() {

  return (
    <div className="p-8 lg:p-12 bg-linear-to-br from-purple-50 via-white to-blue-50">
      {/* Logo */}
      <Link href="/" className="flex items-center justify-start gap-3 mb-8">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#3F3693] text-white">
          <Stethoscope size={20} />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">CareNest</h1>
      </Link>
      <div className="flex items-start justify-center w-full">
        <Card className="border-2 border-gray-200 shadow-2xl md:w-md lg:w-lg">
          <CardContent className="p-8 md:p-10">

            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Create an Account
              </h2>
              <p className="text-gray-600">
                Join CareNest and take control of your health journey
              </p>
            </div>

            {/* Form */}
            <SignUpFrom/>

            {/* Sign In */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                Already have an account?{" "}
                <Link href="/signin" className="text-md hover:text-[#3F3693]">
                  Sign In
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
