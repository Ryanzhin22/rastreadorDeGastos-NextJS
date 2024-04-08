import React from "react";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const CreateItem = ({createOpen, setCreateOpen, gastosArray, setGastosArray}) => {

    const [value, setValue] = useState()
    const [emoji, setEmoji] = useState("👕")
    const [emojiName, setEmojiName] = useState("Roupas")

    const esconderCreateItem = () => {
        setCreateOpen(false)
    }

    const criarGasto = () => {
        const novoGasto = {value: value, emoji: emoji, emojiName: emojiName}
        console.log(novoGasto)
        if(localStorage.getItem("gastosArray")){
            localStorage.setItem("gastosArray", [...gastosArray, JSON.stringify([novoGasto])])
        }else{
            localStorage.setItem("gastosArray", JSON.stringify([novoGasto]))
        }
    }

  return (
    <div className="w-[600px] h-screen items-center justify-center fixed backdrop-blur-lg flex-col" style={{display: createOpen===false ? "none" : "flex"}}>
        <span className="pb-2">Hoje é Segunda 8 de março de 2024</span>
        <input type="number" placeholder="0" className="border-b-2 outline-none text-center text-5xl w-60" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <div className="flex flex-row my-8 justify-between w-48 bg-gray-100 p-4 rounded-full">
            <span>{emoji}</span>
            <p>{emojiName}</p>
            <span className="text-xl bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"><IoMdAdd/></span>
        </div>
        <div className="flex gap-4">
            <button className="bg-red-300 px-8 py-4 rounded-lg font-bold" onClick={esconderCreateItem}>Cancel</button>
            <button className="bg-black text-white font-bold rounded-lg px-8 py-4" onClick={criarGasto}>Confirm</button>
        </div>
    </div>
  )
};

export default CreateItem;
