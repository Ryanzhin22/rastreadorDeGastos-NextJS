"use client"

import Header from "./components/Header";
import Gastos from "./components/Gastos";
import ListasGastos from "./components/ListasGastos";
import Footer from "./components/Footer";
import CreateItem from "./components/CreateItem";
import { useState } from "react";


export default function Home() {

  const [createOpen, setCreateOpen] = useState(false)

  return (
    <main className="max-w-[600px] min-h-screen bg-white m-auto">
      <CreateItem createOpen={createOpen} setCreateOpen={setCreateOpen}/>
      <Header/>
      <Gastos/>
      <ListasGastos setCreateOpen={setCreateOpen}/>
      <Footer createOpen={createOpen} setCreateOpen={setCreateOpen}/>

    </main>
  );
}
