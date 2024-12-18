import { type ColorResult, SketchPicker } from "react-color";

import { HighlighterIcon } from "lucide-react";

import { useEditorStore } from "@/store/editor/use-editor-store";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const HighlightColorButton = () => {
  const { editor } = useEditorStore();

  const value =
    (editor?.getAttributes("highlight").color as string) || "#000000";

  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setHighlight({ color: color.hex }).run();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
          <HighlighterIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-0 p-0 shadow-md">
        <SketchPicker color={value} onChange={onChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
