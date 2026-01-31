import { useState } from "react";

function UseStatePage() {
  const [count, setCount] = useState(0);
  const [Component, setComponent] = useState("STATE SEBELUM DI CLICK");
  return (
    <>
      <div className="mt-25">
        <p className="font-medium text-white dark:text-white-400">
          Use State Page
        </p>

        <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
          Pengimplementasian Beberapa UseState
        </h1>
        <p className="mt-3 text-gray-500 dark:text-gray-400">
          Ini adalah halaman Use State Page
        </p>
      </div>
      {/* Wrapper Utama */}
      <div className="flex flex-col gap-4 p-4 max-w-4xl mx-auto">
        {/* Card 1 */}
        <div className="p-4 relative z-10 bg-white border border-gray-200 rounded-xl md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
          <h1 className="text-center">Count : {count}</h1>
          <div className="mt-10 flex gap-10 justify-center">
            <button
              onClick={() => {
                const newCount = count + 1;
                if (newCount === 10) {
                  alert("Count sudah mencapai 10");
                }
                setCount(newCount);
              }}
            >
              Increment
            </button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-4 relative z-10 bg-white border border-gray-200 rounded-xl md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
          <h1 className="text-center">{Component}</h1>

          <button
            className="mt-10"
            onClick={() => setComponent("STATE SETELAH DI CLICK")}
          >
            Change Component
          </button>
        </div>
      </div>
    </>
  );
}

export default UseStatePage;
