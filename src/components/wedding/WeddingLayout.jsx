
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function WeddingLayout() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}