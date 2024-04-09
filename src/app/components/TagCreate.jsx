import React from "react";
import { useState } from "react";

const TagCreate = ({openNewTag, setOpenNewTag}) => {

    const [emoji, setEmoji] = useState("")
    const [emojiName, setEmojiName] = useState("")

    const handleClose = () => {
        const localStorageEmojis = JSON.parse(localStorage.getItem("tagList"))
        const novoEmoji = {emoji: emoji, emojiName: emojiName}

        if(localStorageEmojis){
            localStorage.setItem("tagList", JSON.stringify(localStorageEmojis.concat(novoEmoji)))
        }else{
            localStorage.setItem("tagList", JSON.stringify([novoEmoji]))
        }

        setOpenNewTag(false)
    } 

  return (
    <div className="absolute bottom-0 w-[600px] h-[600px] flex-col bg-white backdrop-blur-lg border-t-2" style={{display: openNewTag ? "flex" : "none"}} >
        <p className="text-center text-xl py-4 text-gray-400">NOVA TAG</p>
        <div className="flex flex-col gap-3 justify-center items-center">
            <input type="text" className="border-b-2 outline-none text-center text-lg w-60" placeholder="🍔 (Emoji)" value={emoji} onChange={(e)=>setEmoji(e.target.value)}/>
            <input type="text" className="border-b-2 outline-none text-center text-lg w-60" placeholder="Nome da Tag" value={emojiName} onChange={(e)=>setEmojiName(e.target.value)}/>
            <button className="px-8 py-4 bg-black text-white text-lg rounded-md" onClick={handleClose}>Confirmar</button>
        </div>
    </div>
  )
};

export default TagCreate;
