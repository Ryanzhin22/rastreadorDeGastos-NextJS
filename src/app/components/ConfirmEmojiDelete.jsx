import React from "react";
import { IoMdAdd } from "react-icons/io";

const ConfirmEmojiDelete = ({emojiConfirm, setEmojiConfirm}) => {

    const handleClose = () => {
        setEmojiConfirm(false)
    }
   

  return (
    <div className="absolute z-10 w-[600px] h-[600px] bg-white items-center justify-start flex-col gap-4 pt-4 dark:bg-neutral-900 dark:text-neutral-300" style={{display: emojiConfirm ? "flex" : "none"}}>
        <h2 className="text-center text-2xl text-gray-400 ">EXCLUIR</h2>
        <h2 className="text-center text-lg">Você excluiu sua tag!</h2>
        <div className="flex flex-row px-4 py-2 flex-wrap w-[400px] bg-slate-200 min-h-[60px] rounded-lg dark:text-black">DICA: Para fazer uma nova tag basta clicar em <span className="mx-2 text-lg text-center text-gray-500 border border-gray-500 rounded-full flex justify-center items-center w-[20px] h-[20px] cursor-pointer"><IoMdAdd/></span>na tela anterior!</div>
        <div className="flex items-center justify-center">
            <button onClick={handleClose} className="px-8 py-4 bg-neutral-700 rounded-lg text-white dark:bg-white dark:text-black hover:bg-neutral-900">Confirmar</button>
        </div>
    </div>
  )
};

export default ConfirmEmojiDelete;
