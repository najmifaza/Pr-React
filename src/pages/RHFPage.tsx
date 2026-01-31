import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// HAPUS IMPORT LAMA
// import { Icon } from "react-icons-kit";
// import { eyeOff } from "react-icons-kit/feather/eyeOff";
// import { eye } from "react-icons-kit/feather/eye";

// GANTI DENGAN REACT-ICONS (Icon Mata)
import { FiEye, FiEyeOff } from "react-icons/fi"; // Menggunakan Feather Icons dari paket react-icons

const registerFormSchema = z.object({
  fullname: z.string().min(3, { message: "minimal 3 Char weh" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "minimal 8 Char weh" })
    .max(20, { message: "Max 20 Char weh" })
    .regex(/[A-Z]/, { message: "Harus ada huruf besar" })
    .regex(/[0-9]/, { message: "Harus ada angka" }),
  age: z.coerce.number().min(18, { message: "Minimal umur 18 tahun" }),
  DOB: z.coerce.date().optional(),
});

type RegisterFormSchema = z.infer<typeof registerFormSchema>;

function RHFPage() {
  const [type, setType] = useState("password");

  // State untuk logic icon toggle
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const form = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  // HAPUS form.getValues() KARENA BIKIN UI TIDAK UPDATE
  // const Values = form.getValues();

  const handleToggle = () => {
    if (type === "password") {
      setIsPasswordVisible(true);
      setType("text");
    } else {
      setIsPasswordVisible(false);
      setType("password");
    }
  };

  const handleRegisterUser = (values: RegisterFormSchema) => {
    alert("Form Submitted Successfully");
    console.log(values);
  };

  return (
    <div className="mt-25">
      <p className="font-medium text-white dark:text-white-400">Form Page</p>
      <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
        Ini Form Menggunakan React Hook Form
      </h1>
      <p className="mt-3 text-gray-500 dark:text-gray-400">
        Ini adalah halaman Form Page
      </p>

      <div className="max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-left">
        <div className="mx-auto max-w-2xl">
          <div className="mt-5 p-4 relative z-10 bg-white border border-gray-200 rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
            <form onSubmit={form.handleSubmit(handleRegisterUser)}>
              <div className="mb-4 sm:mb-8">
                <label className="block mb-2 text-sm font-medium dark:text-white">
                  Full name
                </label>
                <input
                  className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Full Name"
                  {...form.register("fullname")}
                />
                <span className="text-red-500">
                  {form.formState.errors.fullname?.message}
                </span>
              </div>
              <div className="mb-4 sm:mb-8">
                <label className="block mb-2 text-sm font-medium dark:text-white">
                  Email
                </label>
                <input
                  className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Email Adress"
                  {...form.register("email")}
                />
                <span className="text-red-500">
                  {form.formState.errors.email?.message}
                </span>
              </div>
              <div className="mb-4 sm:mb-8 relative">
                <label className="block mb-2 text-sm font-medium dark:text-white">
                  Password
                </label>
                <div className="relative">
                  <input
                    className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="*******"
                    type={type}
                    {...form.register("password")}
                  />
                  {/* ICON BARU DISINI */}
                  <span
                    className="absolute top-3 right-4 cursor-pointer text-gray-500 hover:text-gray-700"
                    onClick={handleToggle}
                  >
                    {isPasswordVisible ? (
                      <FiEye size={20} />
                    ) : (
                      <FiEyeOff size={20} />
                    )}
                  </span>
                </div>
                <span className="text-red-500">
                  {form.formState.errors.password?.message}
                </span>
              </div>
              <div className="mb-4 sm:mb-8">
                <label className="block mb-2 text-sm font-medium dark:text-white">
                  Age
                </label>
                <input
                  className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="18"
                  type="number"
                  {...form.register("age")}
                />{" "}
                <span className="text-red-500">
                  {form.formState.errors.age?.message}
                </span>
              </div>
              <div className="mb-4 sm:mb-8">
                <label className="block mb-2 text-sm font-medium dark:text-white">
                  Birth
                </label>
                <input
                  className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="*******"
                  type="date"
                  {...form.register("DOB")}
                />{" "}
                <span className="text-red-500">
                  {form.formState.errors.DOB?.message}
                </span>
              </div>

              <div className="mt-6 grid">
                <button className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RHFPage;
