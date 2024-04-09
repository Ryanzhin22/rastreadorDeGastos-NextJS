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
        <div className="flex flex-col items-center justify-center">
            <span>📈</span>
            <p className="text-sm">Gráficos</p>
        </div>
        <span onClick={handleClick} className="text-3xl bg-yellow-300 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"><IoMdAdd/></span>
        <div className="flex flex-col items-center justify-center">
            <span>📢</span>
            <p className="text-sm">Atualizações</p>
        </div>
    </footer>
  )
};

export default Footer;
