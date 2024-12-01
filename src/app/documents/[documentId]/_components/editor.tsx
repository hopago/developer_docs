"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p className='text-indigo-500 font-bold'>Hello world!</p>",
  });

  return <EditorContent editor={editor}></EditorContent>;
};
