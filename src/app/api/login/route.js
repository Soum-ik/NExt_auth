import { TokenCookie } from "@/app/utlitiy/tokenCookie";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const JSON = await req.json();
  let email = JSON["email"];
  let password = JSON["password"];

  if (email === "aminai@gmail.com" && password === `200`) {
    let Cookie = await TokenCookie(email);

    return NextResponse.json(
      { status: true, message: "Login Success" },
      { status: 200, headers: Cookie }
    );
  } else {
    return NextResponse.json({ status: false, message: "Login Fail" });
  }
}

export async function GET(req, res) {
  cookies().delete("token");
  return NextResponse.json({ status: true, message: "Logout Success" });
}
