import { ChevronDownIcon } from "lucide-react";

import { type Level } from "@tiptap/extension-heading";

import { useEditorStore } from "@/store/editor/use-editor-store";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";

type Heading = {
  label: string;
  value: Level;
  fontSize: string;
};

export const HeadingLevelButton = () => {
  const { editor } = useEditorStore();

  const headings: Heading[] = [
    { label: "기본", value: 1, fontSize: "16px" },
    { label: "제목 1", value: 2, fontSize: "32px" },
    { label: "제목 2", value: 3, fontSize: "24px" },
    { label: "제목 3", value: 4, fontSize: "20px" },
    { label: "제목 4", value: 5, fontSize: "18px" },
    { label: "제목 5", value: 6, fontSize: "16px" },
  ];

  const getCurrentHeading = () => {
    for (let level = 0; level <= 6; level++) {
      if (editor?.isActive("heading", { level })) return `제목 ${level - 1}`;
    }
    return "기본";
  };

  const handleSetHeading = (value: Level) => {
    const chain = editor?.chain().focus();

    if (value === 1) {
      chain?.setParagraph().run();
    } else {
      chain?.setHeading({ level: value }).run();
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={
            "h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm"
          }
        >
          <span className="truncate">{getCurrentHeading()}</span>
          <ChevronDownIcon className="ml-2 size-4 shrink-0" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
        {headings.map(({ label, value, fontSize }) => (
          <button
            key={value}
            style={{ fontSize }}
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
              (value === 1 && !editor?.isActive("heading")) ||
                (editor?.isActive("heading", { level: value }) &&
                  "bg-neutral-200/80")
            )}
            onClick={() => handleSetHeading(value)}
          >
            {label}
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
