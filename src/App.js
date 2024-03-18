import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar isSideMenuOpen={isSideMenuOpen} />
      <div className="flex flex-col flex-1 w-full">
        <Header toggleSideMenu={toggleSideMenu} />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
