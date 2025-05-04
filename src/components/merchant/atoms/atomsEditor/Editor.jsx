import { EditorContent, useEditor } from "@tiptap/react";
import React from "react";
// Tiptap STraterKit
import StarterKit from "@tiptap/starter-kit";
// Document & Paragraph
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
// For Link Adding
import Link from "@tiptap/extension-link";
// Text Styles & Formating
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import Toolbar from "./Toolbar";


const Editor = ({ content, setContent ,editor }) => {

  return (
    <div className="  w-full h-[120px]">

      <EditorContent
        editor={editor}
        className=" bg-[#f8f8f8]  h-full overflow-y-auto p-2  rounded-lg  w-full  focus:border-none"
      />
    </div>
  );
};

export default Editor;