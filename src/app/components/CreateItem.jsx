import React from "react";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import EmojiCreate from "./EmojiCreate";

const CreateItem = ({createOpen, setCreateOpen}) => {

    const [value, setValue] = useState("")
    const [emoji, setEmoji] = useState("👕")
    const [emojiName, setEmojiName] = useState("Roupas")
    const [emojiOpen, setEmojiOpen] = useState(false)

    const esconderCreateItem = () => {
        setCreateOpen(false)
    }
    
    const dateNow = new Date()
    const dateFormat = `${dateNow.getDate()}/` + `${dateNow.getMonth()+1}/` + `${dateNow.getFullYear()} ` + `${dateNow.getHours()}h` + `${dateNow.getMinutes()}`

    const criarGasto = () => {
        if(value){
            const novoGasto = {id:Math.floor(Math.random()*1000000), value: value, emoji: emoji, emojiName: emojiName, hour: dateFormat}
            
            const gastosLocalStorage = JSON.parse(localStorage.getItem("gastosArray"))
            const gastoLocal = localStorage.getItem("gastoTotal")
    
            localStorage.setItem("gastoTotal", (Number((gastoLocal ? gastoLocal : 0)) + Number(value)))
    
            if(gastosLocalStorage){
                localStorage.setItem("gastosArray", JSON.stringify(gastosLocalStorage.concat(novoGasto)))
            }else{
                localStorage.setItem("gastosArray", JSON.stringify([novoGasto]))
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


  return (
      <div className="w-[600px] h-screen items-center justify-center fixed backdrop-blur-lg flex-col" style={{display: createOpen===false ? "none" : "flex"}}>
        <span className="pb-2">Hoje é dia {dateFormat}</span>
        <input type="number" placeholder="0" className="border-b-2 outline-none text-center text-5xl w-60 bg-transparent" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <div className="flex flex-row my-8 justify-between w-48 bg-gray-100 p-4 rounded-full min-w-[220px] gap-2">
            <span>{emoji}</span>
            <p className="break-keep dark:text-neutral-600">{emojiName}</p>
            <span className="text-xl bg-gray-300 rounded-full w-8 h-6 flex items-center justify-center cursor-pointer dark:text-white hover:bg-gray-400 transtion-all duration-300" onClick={handleOpen}><IoMdAdd/></span>
        </div>
        <div className="flex gap-4">
            <button className="bg-red-300 px-8 py-4 rounded-lg font-bold dark:bg-red-500 transition-all duration-300 hover:bg-red-400 " onClick={esconderCreateItem}>Cancel</button>
            <button className="bg-neutral-700 text-white font-bold rounded-lg px-8 py-4 transition-all duration-300 hover:bg-neutral-900" onClick={criarGasto}>Confirm</button>
        </div>
        <EmojiCreate setEmojiOpen={setEmojiOpen} setEmoji={setEmoji} setEmojiName={setEmojiName} emojiOpen={emojiOpen}/>
    </div>
  )
};

export default CreateItem;
