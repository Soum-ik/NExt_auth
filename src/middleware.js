import { CheckCookieAuth } from "./app/utlitiy/MiddlewareUtility";

export async function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return CheckCookieAuth(request);
  }
}
