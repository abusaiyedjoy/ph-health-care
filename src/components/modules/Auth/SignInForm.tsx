"use client";
import { Button } from "@/components/ui/button";
import { useState, useActionState, useEffect } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, ArrowRight, AlertCircle } from "lucide-react";
import Toast from "@/components/shared/Toast";
import { loginUser } from "@/services/auth/loginUser";
import { toast } from "sonner";

const SignInForm = ({ redirect }: { redirect?: string }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [state, formAction, isPending] = useActionState(loginUser, null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const getFieldError = (fieldName: string) => {
    if (state && state.errors) {
      const error = state.errors.find((err: any) => err.field === fieldName);
      return error?.message || null;
    }
    return null;
  };

  // Show success toast when login is successful
   useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <>
      {/* Success Message */}
      {submitSuccess && <Toast title={"Sign In successfully!"} />}

      <form action={formAction}>
      {redirect && <input type="hidden" name="redirect" value={redirect} />}
        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all ${
                getFieldError("email")
                  ? "border-red-500 focus:ring-2 focus:ring-red-200"
                  : "border-gray-300 focus:ring-2 focus:ring-[#3F3693] focus:border-transparent"
              }`}
            />
          </div>
          {getFieldError("email") && (
            <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {getFieldError("email")}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className={`w-full pl-12 pr-12 py-3 border-2 rounded-xl focus:outline-none transition-all ${
                getFieldError("password")
                  ? "border-red-500 focus:ring-2 focus:ring-red-200"
                  : "border-gray-300 focus:ring-2 focus:ring-[#3F3693] focus:border-transparent"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#3F3693] transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
          {getFieldError("password") && (
            <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {getFieldError("password")}
            </p>
          )}
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="rememberMe"
              className="w-4 h-4 text-[#3F3693] border-gray-300 rounded focus:ring-[#3F3693]"
            />
            <span className="text-sm text-gray-700">Remember me</span>
          </label>
          <Link
            href="/forget-password"
            className="text-sm text-[#3F3693] hover:underline font-semibold"
          >
            Forgot Password?
          </Link>
        </div>

        {/* General Error Message */}
        {state?.message && !state?.success && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span className="text-sm">{state.message}</span>
          </div>
        )}

        {/* Submit */}
        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-linear-to-r from-[#3F3693] to-purple-600 hover:from-[#342d7a] hover:to-purple-700 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
          <span className="relative z-10 flex items-center justify-center gap-2">
            {isPending ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Processing...
              </>
            ) : (
              <>
                Sign In
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </span>
        </Button>
      </form>
    </>
  );
};

export default SignInForm;
