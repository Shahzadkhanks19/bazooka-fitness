"use client";

import { Check } from "lucide-react";

export default function CustomCheckbox({
  checked,
  onChange,
  label,
  required = false,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div className="flex items-start gap-3 text-[9px] text-bazooka-text-secondary">
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        data-required={required || undefined}
        onClick={() => onChange(!checked)}
        className={`mt-0.5 grid size-[18px] shrink-0 place-items-center rounded-[4px] border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bazooka-lime/30 ${
          checked
            ? "border-bazooka-lime bg-bazooka-lime text-black"
            : "border-bazooka-border-strong bg-bazooka-black text-transparent hover:border-bazooka-lime"
        }`}
      >
        <Check className="size-3" strokeWidth={3} />
      </button>
      <div className="leading-4">{label}</div>
    </div>
  );
}
