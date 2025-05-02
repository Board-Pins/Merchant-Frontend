import React from "react";
import { LuBold, LuRedo } from "react-icons/lu";
import { FiAlignJustify, FiItalic } from "react-icons/fi";
import { HiOutlineListBullet } from "react-icons/hi2";
import { GrOrderedList } from "react-icons/gr";
import { IoMdUndo } from "react-icons/io";
import { FaAlignCenter, FaAlignLeft, FaAlignRight } from "react-icons/fa";
import { AiOutlineUnderline } from "react-icons/ai";
import { PiHighlighterThin } from "react-icons/pi";
const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const handleButtonClick = (command) => {
    editor.chain().focus()[command]().run();
  };

  const isActive = (command) => editor.isActive(command);

  return (
    <div
      id=""
      className="flex flex-wrap justify-center bg-transparent rounded-lg  gap-3 text-gray-600 items-center py-2"
    >
      <button
        onClick={() => handleButtonClick("toggleBold")}
        className={isActive("bold") ? "is-active" : ""}
        type="button"
      >
        <LuBold />
      </button>
      <button
        onClick={() => handleButtonClick("toggleItalic")}
        className={isActive("italic") ? "is-active" : ""}
        type="button"
      >
        <FiItalic />
      </button>

      <button
        onClick={() => handleButtonClick("toggleBulletList")}
        className={isActive("bulletList") ? "is-active" : ""}
        type="button"
      >
        <HiOutlineListBullet />
      </button>
      <button
        onClick={() => handleButtonClick("toggleOrderedList")}
        className={isActive("orderedList") ? "is-active" : ""}
        type="button"
      >
        <GrOrderedList />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={isActive({ textAlign: "left" }) ? "is-active" : ""}
        type="button"
      >
        <FaAlignLeft />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={isActive({ textAlign: "center" }) ? "is-active" : ""}
        type="button"
      >
        <FaAlignCenter />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={isActive({ textAlign: "right" }) ? "is-active" : ""}
        type="button"
      >
        <FaAlignRight />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={isActive({ textAlign: "justify" }) ? "is-active" : ""}
        type="button"
      >
        <FiAlignJustify />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "is-active" : ""}
        type="button"
      >
        <AiOutlineUnderline />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={editor.isActive("highlight") ? "is-active" : ""}
        type="button"
      >
        <PiHighlighterThin />
      </button>

      <button
        onClick={() => handleButtonClick("undo")}
        disabled={!editor.can().chain().focus().undo().run()}
        type="button"
      >
        <IoMdUndo />
      </button>
      <button
        onClick={() => handleButtonClick("redo")}
        disabled={!editor.can().chain().focus().redo().run()}
        type="button"
      >
        <LuRedo />
      </button>
    </div>
  );
};

export default MenuBar;
