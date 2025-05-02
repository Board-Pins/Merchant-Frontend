// useTiptapEditor.js
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import ListItem from "@tiptap/extension-list-item";

const useTiptapEditor = () => {
  return useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: { HTMLAttributes: { class: "bullet-list-class", id: "ls" } },
        orderedList: { HTMLAttributes: { class: "ordered-list-class" } },
      }),
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ types: [ListItem.name] }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Underline.configure(),
      Highlight.configure(),
    ],
    onUpdate: ({ editor }) => {

    },
  });
};

export default useTiptapEditor;
