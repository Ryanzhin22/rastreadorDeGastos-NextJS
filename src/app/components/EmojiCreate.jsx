import React from "react";
import { IoMdAdd } from "react-icons/io";
import { useState, useEffect } from "react";
import TagCreate from "./TagCreate";
import ConfirmEmojiDelete from "./ConfirmEmojiDelete";

const EmojiCreate = ({setEmojiOpen, emojiOpen, setEmoji, setEmojiName}) => {

    const [openNewTag, setOpenNewTag] = useState(false)
    const [emojiConfirm, setEmojiConfirm] = useState(false)

    useEffect(()=>{

        const tagList = localStorage.getItem("tagList")

        if(!tagList){
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
            localStorage.setItem("tagList", JSON.stringify(arrayEmojis))
        }
    
        
    },[])

    const arrayEmojisCreated = JSON.parse(localStorage.getItem("tagList"))
    

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

    const handleRemove = (e) => {
        const emojiArrayFiltered = arrayEmojisCreated.filter((em,i)=> i != e) 
        localStorage.setItem("tagList", JSON.stringify(emojiArrayFiltered))
    }

    const handleOpenConfirm = () => {
        setEmojiConfirm(true)
    }

  return (
    <div className="absolute bottom-0 w-[600px] h-[600px] flex-col bg-white backdrop-blur-lg border-t-2 dark:bg-neutral-900 dark:text-neutral-300" style={{display: emojiOpen ? "flex" : "none"}}>
        <TagCreate openNewTag={openNewTag} setOpenNewTag={setOpenNewTag}/>
        <ConfirmEmojiDelete emojiConfirm={emojiConfirm} setEmojiConfirm={setEmojiConfirm} />
        <p className="text-xl font-light text-gray-400 py-6 text-center">TAGS</p>
        <div className="flex flex-row flex-wrap px-4 ">
            <div className="w-[140px] h-[80px] flex items-center justify-center"><span className="text-3xl text-center text-gray-500 border border-gray-500 rounded-full flex justify-center items-center w-[60px] h-[60px] cursor-pointer hover:text-gray-600 transition-all duration-300 hover:bg-slate-100" onClick={handleOpenNewTag}><IoMdAdd/></span></div>
        {arrayEmojisCreated && arrayEmojisCreated.map((elm,key)=>(
            <div index={key} key={key} className="group w-[140px] h-[80px] flex flex-col justify-center items-center relative cursor-default" onClick={()=>handleClose(elm)}>
                <button onClick={(e) => { e.stopPropagation(); handleOpenConfirm(); handleRemove(key) }} className="cursor-pointer overlay hidden group-hover:flex justify-center items-center w-4 h-4 bg-red-600 text-white text-sm absolute right-0 top-0 rounded-full">×</button>
                <span className="text-lg">{elm.emoji}</span>
                <span className="text-lg transition-all duration-300 group-hover:text-xl">{elm.emojiName}</span>
            </div>
        ))}
        </div>
    </div>
  )
};

export default EmojiCreate;
