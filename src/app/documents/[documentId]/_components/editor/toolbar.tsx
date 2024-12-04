"use client";

import {
  BoldIcon,
  ItalicIcon,
  ListTodoIcon,
  LucideIcon,
  MessageSquarePlusIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  SpellCheckIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";

import { useEditorStore } from "@/store/editor/use-editor-store";

import { Separator } from "@/components/ui/separator";
import { ToolbarButton } from "./buttons/toolbar-button";
import { FontFamilyButton } from "./buttons/font-family-button";
import { HeadingLevelButton } from "./buttons/heading-level-button";

export interface ToolbarButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  icon?: LucideIcon;
}

type Sections = {
  label: string;
  icon: LucideIcon;
  onClick?: () => void;
  isActive?: boolean;
};

export const Toolbar = ({ onClick, isActive, icon }: ToolbarButtonProps) => {
  const { editor } = useEditorStore();

  const sections: Sections[][] = [
    [
      {
        label: "되돌리기",
        icon: Undo2Icon,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: "다시하기",
        icon: Redo2Icon,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        label: "프린트하기",
        icon: PrinterIcon,
        onClick: () => window.print(),
      },
      {
        label: "철자 검사",
        icon: SpellCheckIcon,
        onClick: () => {
          const detectedLanguage = window.navigator.language || "en";
          editor?.view.dom.setAttribute("lang", detectedLanguage);
          const current = editor?.view.dom.getAttribute("spellcheck");
          editor?.view.dom.setAttribute(
            "spellcheck",
            current === "false" ? "true" : "false"
          );
        },
      },
    ],
    [
      {
        label: "굵게",
        icon: BoldIcon,
        onClick: () => editor?.chain().focus().toggleBold().run(),
        isActive: editor?.isActive("bold"),
      },
      {
        label: "기울게",
        icon: ItalicIcon,
        onClick: () => editor?.chain().focus().toggleItalic().run(),
        isActive: editor?.isActive("italic"),
      },
      {
        label: "밑줄",
        icon: UnderlineIcon,
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
        isActive: editor?.isActive("underline"),
      },
    ],
    [
      {
        label: "코멘트",
        icon: MessageSquarePlusIcon,
        onClick: () => console.log("TODO: Comments"),
        isActive: false,
      },
      {
        label: "할일 목록",
        icon: ListTodoIcon,
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
        isActive: editor?.isActive("taskList"),
      },
      {
        label: "글자 효과 제거",
        icon: RemoveFormattingIcon,
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
      },
    ],
  ];

  return (
    <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
      {sections[0].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      <FontFamilyButton />
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      <HeadingLevelButton />
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      {/** TODO: Font Size */}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      {sections[1].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      {/** TODO: Text Color */}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      {/** TODO: Highlight color */}
      {/** TODO: Link */}
      {/** TODO: Image */}
      {/** TODO: Align */}
      {/** TODO: Line height */}
      {/** TODO: List */}
      {sections[2].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
    </div>
  );
};
