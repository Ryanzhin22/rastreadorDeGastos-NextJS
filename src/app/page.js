"use client"

import Header from "./components/Header";
import Gastos from "./components/Gastos";
import ListasGastos from "./components/ListasGastos";
import Footer from "./components/Footer";
import CreateItem from "./components/CreateItem";
import { useState } from "react";


export default function Home() {

  const [gastosArray, setGastosArray] = useState(localStorage.getItem("gastosArray") ? localStorage.getItem("gastosArray") : [])
  const [createOpen, setCreateOpen] = useState(false)

  console.log(gastosArray)

  return (
    <main className="max-w-[600px] h-screen bg-white m-auto">
      <CreateItem createOpen={createOpen} setCreateOpen={setCreateOpen} setGastosArray={setGastosArray} gastosArray={gastosArray}/>
      <Header/>
      <Gastos/>
      <ListasGastos/>
      <Footer createOpen={createOpen} setCreateOpen={setCreateOpen}/>

    </main>
  );
}
