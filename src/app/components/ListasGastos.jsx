import React from "react";

const ListasGastos = () => {
  return (
    <section className="flex flex-col">
        <div className="p-4 flex justify-between">
            <span>Hoje</span>
            <span>$-100.00</span>
        </div>
        <div className="flex flex-row justify-between p-4">
            <div className="flex flex-row justify-center items-center gap-4">
                <span className="text-4xl">🔥</span>
                <div>
                    <p className="font-bold">Gas</p>
                    <p className="text-slate-500 font-light">14h30</p>
                </div>
            </div>
            <span className="text-red-500 font-bold tracking-wider">-90$</span>
        </div>
    </section>
)
};

export default ListasGastos;
