import Link from "next/link";

export default function Home() {
  return (
    <div className=" min-h-screen grid place-content-center">
      <div className="flex gap-1">
        <Link
          className=" px-3 py-2 rounded-sm shadow-md bg-slate-200"
          href={"/login"}
        >
          Login
        </Link>
        <Link
          className=" px-3 py-2 rounded-sm shadow-md bg-slate-200"
          href={"/dashboard"}
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
}
