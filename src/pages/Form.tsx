import { useState } from "react";

function FormPage() {
  // uncontrolled Component/Input
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  // controlled Component/Input
  const [fullNameInput, setFullNameInput] = useState("");
  const [PasswordInput, setPasswordInput] = useState("");

  const [usernameErormasage, setUsernameErrorMessage] = useState("");
  const [passwordErormasage, setpasswordErrorMessage] = useState("");
  function handlesubmit() {
    // const FullNameFormValeu = inputNameRef.current?.value;
    // const FullPasswordFormValeu = inputPasswordRef.current?.value;
    // alert(
    //   "Form Submitted Successfully " +
    //     FullNameFormValeu +
    //     " " +
    //     FullPasswordFormValeu,
    // );
    // alert("Form Submitted Successfully " + fullNameInput + " " + PasswordInput);

    const fullNameValidation = fullNameInput.length <= 5;
    const passwordValidation = PasswordInput.length <= 8;

    if (fullNameValidation) {
      setUsernameErrorMessage("Username harus lebih dari 5 karakter");
    }
    if (passwordValidation) {
      setpasswordErrorMessage("Password harus lebih dari 8 karakter");
      return;
    }
  }

  return (
    <div className="mt-25">
      <p className="font-medium text-white dark:text-white-400">Form Page</p>

      <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
        Masukkan Data Anda
      </h1>

      <p className="mt-3 text-gray-500 dark:text-gray-400">
        Ini adalah halaman Form Page
      </p>

      {/* FORM */}
      {/* Comment Form */}
      <div className="max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-left">
        <div className="mx-auto max-w-2xl">
          {/* Card */}
          <div className="mt-5 p-4 relative z-10 bg-white border border-gray-200 rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
            <form>
              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="full-name"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Full name
                </label>
                <input
                  onChange={(event) => setFullNameInput(event.target.value)}
                  type="text"
                  id="full-name"
                  className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Full name"
                  value={fullNameInput}
                />
                <span>{usernameErormasage}</span>
              </div>
              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="Password"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Password
                </label>
                <input
                  onChange={(event) => setPasswordInput(event.target.value)}
                  type="text"
                  id="Password"
                  className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="*******"
                  value={PasswordInput}
                />
                <span>{passwordErormasage}</span>
              </div>

              <div className="mt-6 grid">
                <button
                  onClick={handlesubmit}
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          ini useState
          <p>Full Name = {fullNameInput}</p>
          <p>Password = {PasswordInput}</p>
          {/* End Card */}
        </div>
      </div>
      {/* End Comment Form */}
    </div>
  );
}

export default FormPage;
