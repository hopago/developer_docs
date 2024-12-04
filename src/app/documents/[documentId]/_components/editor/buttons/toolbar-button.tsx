import { cn } from "@/lib/utils";

import { ToolbarButtonProps } from "../toolbar";

export const ToolbarButton = ({
  onClick,
  isActive,
  icon: Icon,
}: ToolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80"
      )}
    >
      {Icon && <Icon className="size-4" />}
    </button>
  );
};
