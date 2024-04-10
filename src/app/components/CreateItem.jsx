import React from "react";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import EmojiCreate from "./EmojiCreate";

const CreateItem = ({createOpen, setCreateOpen, setGastosArray}) => {

    const [value, setValue] = useState("")
    const [emoji, setEmoji] = useState("👕")
    const [emojiName, setEmojiName] = useState("Roupas")
    const [emojiOpen, setEmojiOpen] = useState(false)

    const esconderCreateItem = () => {
        setCreateOpen(false)
    }

    const criarGasto = () => {
        if(value){
            const novoGasto = {value: value, emoji: emoji, emojiName: emojiName}
            const gastosLocalStorage = JSON.parse(localStorage.getItem("gastosArray"))
            const gastoTotal = localStorage.getItem("gastoTotal")
    
            localStorage.setItem("gastoTotal", (Number((gastoTotal ? gastoTotal : 0)) + Number(value)))
    
            if(gastosLocalStorage){
                localStorage.setItem("gastosArray", JSON.stringify(gastosLocalStorage.concat(novoGasto)))
                setGastosArray(gastosLocalStorage.concat(novoGasto))
            }else{
                localStorage.setItem("gastosArray", JSON.stringify([novoGasto]))
                setGastosArray([novoGasto])
            }
    
            setValue("")
            setCreateOpen(false)
        }else{
            alert("Adicione um valor")
        }
    }

    const handleOpen = () => {
        emojiOpen ? setEmojiOpen(false) : emojiOpen
        !emojiOpen ? setEmojiOpen(true) : emojiOpen
    }

    console.log(emojiOpen)


  return (
      <div className="w-[600px] h-screen items-center justify-center fixed backdrop-blur-lg flex-col" style={{display: createOpen===false ? "none" : "flex"}}>
        <span className="pb-2">Hoje é Segunda 8 de março de 2024</span>
        <input type="number" placeholder="0" className="border-b-2 outline-none text-center text-5xl w-60" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <div className="flex flex-row my-8 justify-between w-48 bg-gray-100 p-4 rounded-full min-w-[220px] gap-2">
            <span>{emoji}</span>
            <p className="break-keep">{emojiName}</p>
            <span className="text-xl bg-gray-300 rounded-full w-8 h-6 flex items-center justify-center cursor-pointer" onClick={handleOpen}><IoMdAdd/></span>
        </div>
        <div className="flex gap-4">
            <button className="bg-red-300 px-8 py-4 rounded-lg font-bold" onClick={esconderCreateItem}>Cancel</button>
            <button className="bg-black text-white font-bold rounded-lg px-8 py-4" onClick={criarGasto}>Confirm</button>
        </div>
        <EmojiCreate setEmojiOpen={setEmojiOpen} setEmoji={setEmoji} setEmojiName={setEmojiName} emojiOpen={emojiOpen}/>
    </div>
  )
};

export default CreateItem;
