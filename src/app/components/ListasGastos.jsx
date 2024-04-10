import React from "react";
import { FaTrash } from "react-icons/fa";

const ListasGastos = ({}) => {

    const localStorageArray = JSON.parse(localStorage.getItem("gastosArray"))
    const gastoTotal = localStorage.getItem("gastoTotal")

    const handleRemoveGasto = (id) => {
        const todosGastos = JSON.parse(localStorage.getItem("gastosArray"))
        const newArray = todosGastos.filter((e) => e.id !== id)
        localStorage.setItem("gastosArray", JSON.stringify(newArray))
    }

  return (
    <section className="flex flex-col min-h-[400px]">
        <div className="p-4 flex justify-between">
            <span>Hoje</span>
            <span>{`-${gastoTotal ? gastoTotal : 0},00$`}</span>
        </div>
        {localStorageArray && localStorageArray.map((elm,index) => (

        <div index={index} key={index} className="flex flex-row justify-between p-4 group">
            <div className="flex flex-row justify-center items-center gap-4">
                <span className="text-4xl">{elm.emoji}</span>
                <div>
                    <p className="font-bold">{elm.emojiName}</p>
                    <p className="text-slate-500 font-light">14h30</p>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-red-500 font-bold tracking-wider text-md">{`-${elm.value}$`}</span>
                <span className="hidden group-hover:flex text-sm cursor-pointer text-gray-400" onClick={()=>handleRemoveGasto(elm.id)}><FaTrash/></span>
            </div>
        </div>
            
        ))}
    </section>
)
};

export default ListasGastos;
