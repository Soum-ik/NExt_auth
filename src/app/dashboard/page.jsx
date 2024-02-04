"use client";
import { useRouter } from "next/navigation";
const Dashboard = () => {
  const router = useRouter();
  async function logout() {
    const res = await fetch("/api/login");
    const json = await res.json();
    if (json["status"] === true) {
      router.replace("/");
    }
  }

  return (
    <div>
      <h1>This is a Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
export default Dashboard;
