import React from "react";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import TagCreate from "./TagCreate";

const EmojiCreate = ({setEmojiOpen, emojiOpen, setEmoji, setEmojiName}) => {

    const [openNewTag, setOpenNewTag] = useState(false)

    const arrayEmojis = [
        {
            emoji: "👕",
            emojiName: "Roupas"
        },
        {
            emoji: "🍔",
            emojiName: "Comidas"
        },
        {
            emoji: "💊",
            emojiName: "Saúde"
        },
        {
            emoji: "📚",
            emojiName: "Educação"
        }
    ]

    const handleClose = (e) => {
        setEmojiName(e.emojiName)
        setEmoji(e.emoji)
        setEmojiOpen(false)
    } 

    const handleOpenNewTag = () => {
        openNewTag ? setOpenNewTag(false) : openNewTag
        !openNewTag ? setOpenNewTag(true) : openNewTag
        console.log(openNewTag)
    }

  return (
    <div className="absolute bottom-0 w-[600px] h-[600px] flex-col bg-white backdrop-blur-lg border-t-2" style={{display: emojiOpen ? "flex" : "none"}}>
        <TagCreate openNewTag={openNewTag} setOpenNewTag={setOpenNewTag}/>
        <p className="text-xl font-light text-gray-400 py-6 text-center">TAGS</p>
        <div className="flex flex-row flex-wrap px-4 ">
            <div className="w-[140px] h-[80px] flex items-center justify-center"><span className="text-3xl text-center text-gray-500 border border-gray-500 rounded-full flex justify-center items-center w-[60px] h-[60px] cursor-pointer" onClick={handleOpenNewTag}><IoMdAdd/></span></div>
        {arrayEmojis.map((elm,key)=>(
            <div key={key} className="w-[140px] h-[80px] flex flex-col justify-center items-center cursor-pointer" onClick={()=>handleClose(elm)}>
                <span className="text-lg">{elm.emoji}</span>
                <span className="text-lg">{elm.emojiName}</span>
            </div>
        ))}
        </div>
    </div>
  )
};

export default EmojiCreate;
