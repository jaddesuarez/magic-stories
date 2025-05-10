import "./App.css";
import NavBar from "@/components/NavBar/NavBar.component";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
