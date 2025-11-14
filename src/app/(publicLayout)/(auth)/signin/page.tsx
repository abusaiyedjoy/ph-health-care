
import { Card, CardContent } from "@/components/ui/card";
import {
  Stethoscope,
} from "lucide-react";
import Link from "next/link";
import SignInForm from "@/components/modules/Auth/SignInForm";

const  SignInPage = async ({
  searchParams,
}: {
  searchParams?: Promise<{ redirect?: string }>;
}) => {
  const params = (await searchParams) || {};

  return (
    <div className="p-8 lg:p-12 bg-linear-to-br from-purple-50 via-white to-blue-50">
      {/* Logo */}
      <Link href="/" className="flex items-center justify-start gap-3 mb-8">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#3F3693] text-white">
          <Stethoscope size={20} />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">CareNest</h1>
      </Link>
      <div className="w-full flex items-start justify-center">
        <Card className="border-2 border-gray-200 shadow-2xl md:w-md lg:w-lg">
          <CardContent className="p-8 md:p-10">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-600">
                Sign in to continue to your account
              </p>
            </div>

            {/* Form */}
            <SignInForm redirect={params.redirect}/>

            {/* Sign Up */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                Don't have any account?{" "}
                <Link href="/signup" className="text-md hover:text-[#3F3693]">
                  Sign Up
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
export default SignInPage;