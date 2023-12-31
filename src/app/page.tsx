import NavBar from "@/components/Nav/navBar";
import Profile from "@/components/Profile/profile";

export default function Home() {
  return (
    <main className="min-h-screen flex-col ">
      <NavBar />
      <Profile />
    </main>
  );
}
