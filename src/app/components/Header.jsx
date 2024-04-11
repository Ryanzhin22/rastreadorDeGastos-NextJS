import React from "react";
import { MdOutlineDarkMode, MdLogout  } from "react-icons/md";

const Header = ({darkMode, setDarkMode}) => {

  const handleToggle = () => {
    setDarkMode(!darkMode)
  }

  const closeWindow = () => {
    window.close()
  }

  return (      
    <header className="flex flex-row justify-between p-4">
        <MdOutlineDarkMode onClick={handleToggle} className="h-8 w-8 cursor-pointer"/>
        <p className="uppercase text-xl font-semibold">gastos</p>
        <MdLogout onClick={closeWindow} className="h-8 w-8 cursor-pointer"/>
    </header>
  )
};

export default Header;
