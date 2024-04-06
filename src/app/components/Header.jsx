import React from "react";
import { MdOutlineDarkMode, MdLogout  } from "react-icons/md";

const Header = () => {
  return (      
    <header className="flex flex-row justify-between p-4">
        <MdOutlineDarkMode className="h-8 w-8 cursor-pointer"/>
        <p className="uppercase text-xl font-semibold">gastos</p>
        <MdLogout className="h-8 w-8 cursor-pointer"/>
    </header>
  )
};

export default Header;
