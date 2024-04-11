"use client"

import Header from "./components/Header";
import Gastos from "./components/Gastos";
import ListasGastos from "./components/ListasGastos";
import Footer from "./components/Footer";
import CreateItem from "./components/CreateItem";
import { useState } from "react";


export default function Home() {

  const [createOpen, setCreateOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode && "dark"}>
      <main className="max-w-[600px] min-h-screen bg-white m-auto dark:bg-neutral-900 dark:text-neutral-300">
        <CreateItem createOpen={createOpen} setCreateOpen={setCreateOpen}/>
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Gastos/>
        <ListasGastos setCreateOpen={setCreateOpen}/>
        <Footer createOpen={createOpen} setCreateOpen={setCreateOpen}/>
      </main>
    </div>
  );
}
