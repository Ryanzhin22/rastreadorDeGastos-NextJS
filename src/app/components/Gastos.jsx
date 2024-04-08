import React from "react";

const Gastos = () => {
  return (
    <section className="h-[400px] flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center">
            <p className="text-slate-500 font-light">Gastos desse mês</p>
            <h2 className="text-[80px] font-semibold text-red-500">$-100.00</h2>
        </div>
    </section>
)
};

export default Gastos;
