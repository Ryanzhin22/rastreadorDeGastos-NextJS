import React from "react";
import { IoMdAdd } from "react-icons/io";

const Footer = ({createOpen, setCreateOpen}) => {

    const handleClick = () => {
        if(createOpen===true)
        setCreateOpen(false)
        else
        setCreateOpen(true)
    }

  return (
    <footer className="flex items-center w-[600px] p-2 bottom-0 justify-around border-t-2 z-10">
        <div className="flex flex-col items-center justify-center cursor-pointer">
            <span>‍🔧</span>
            <p className="text-sm">Em breve</p>
        </div>
        <span onClick={handleClick} className="text-3xl bg-yellow-300 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer dark:text-black hover:text-4xl hover:bg-yellow-400 hover:px-2 hover:py-2 transition-all duration-300"><IoMdAdd/></span>
        <div className="flex flex-col items-center justify-center cursor-pointer">
            <span>‍🔧</span>
            <p className="text-sm">Em breve</p>
        </div>
    </footer>
  )
};

export default Footer;
