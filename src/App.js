import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar isSideMenuOpen={isSideMenuOpen} />
      <Header toggleSideMenu={toggleSideMenu} />
      <main className="h-full overflow-y-auto">{/* Main content */}</main>
    </div>
  );
}

export default App;
