"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  console.log(form);
  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const config = { method: "POST", body: JSON.stringify(form) };
    const response = await fetch("/api/login", config);
    const json = await response.json();
    if (json["status"] == true) {

      router.replace('/dashboard')
    } else {
      alert(json['message'])
    }
  };

  return (
    <div className="min-h-screen grid place-content-center">
      <form onSubmit={handleForm} action="">
        <input
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="Email"
          type="text"
          className=" my-2 px-4 py-2 min-w-[400px] rounded-md  outline-none shadow-md"
        />
        <br />
        <input
          onChange={(e) => handleChange("password", e.target.value)}
          placeholder="Password"
          className=" my-2 px-4 py-2 min-w-[400px] rounded-md outline-none shadow-md"
          type="text"
        />
        <br />
        <button className=" shadow-md text-white bg-red-400 px-3 py-1 rounded">
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};
export default Page;
