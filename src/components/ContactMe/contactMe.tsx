import { useRouter } from "next/navigation";

export default function ContactMe() {
  const router = useRouter();

  return (
    <div className="mt-8">
      <h3 className=" text-2xl font-semibold underline pl-4">Contact me</h3>
      <div
        className=" h-1/2 rounded-lg flex px-4 py-4 text-xl"
        style={{ width: 650 }}
      >
        I am at your disposal for anything or information.
      </div>
      <div className=" flex items-center justify-center mt-8 ">
        <button
          className=" flex gap-2 bg-blue-500 text-white font-medium text-xl px-10 py-3 rounded-md "
          type="button"
          onClick={() => router.push("mailto:douglas.edig@outlook.com")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 mt-0.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          Sent me an E-mail
        </button>
      </div>
    </div>
  );
}
