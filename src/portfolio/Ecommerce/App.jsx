import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto my-10">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
        Sign in to your account
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className={`form-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-${
              errors.email ? "red" : "blue"
            }-500 focus:border-${errors.email ? "red" : "blue"}-500`}
          />
          {errors.email && (
            <span className="text-red-500 mt-1 text-sm">
              {errors.email.type === "required" && "Email is required"}
            </span>
          )}
        </div>
        <div className="mt-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password", { required: true })}
              className={`form-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-${
                errors.password ? "red" : "blue"
              }-500 focus:border-${errors.password ? "red" : "blue"}-500`}
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOffIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>
          {errors.password && (
            <span className="text-red-500 mt-1 text-sm">
              {errors.password.type === "required" && "Password is required"}
            </span>
          )}
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
