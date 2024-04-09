import React from "react";

const ListasGastos = ({}) => {

    const localStorageArray = JSON.parse(localStorage.getItem("gastosArray"))
    const gastoTotal = localStorage.getItem("gastoTotal")

  return (
    <section className="flex flex-col min-h-[400px]">
        <div className="p-4 flex justify-between">
            <span>Hoje</span>
            <span>{`-${gastoTotal ? gastoTotal : 0},00$`}</span>
        </div>
        {localStorageArray && localStorageArray.map((elm,index) => (

        <div key={index} className="flex flex-row justify-between p-4">
            <div className="flex flex-row justify-center items-center gap-4">
                <span className="text-4xl">{elm.emoji}</span>
                <div>
                    <p className="font-bold">{elm.emojiName}</p>
                    <p className="text-slate-500 font-light">14h30</p>
                </div>
            </div>
            <span className="text-red-500 font-bold tracking-wider text-md">{`-${elm.value}$`}</span>
        </div>
            
        ))}
    </section>
)
};

export default ListasGastos;
