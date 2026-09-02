"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

export type SelectOption = {
  label: string;
  value: string;
};

export default function CustomSelect({
  value,
  onChange,
  options,
  placeholder,
  disabled = false,
  required = false,
  ariaLabel,
  className = "",
}: {
  value: string;
  onChange: (value: string) => void;
  options: readonly SelectOption[];
  placeholder: string;
  disabled?: boolean;
  required?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const listId = useId();
  const selected = options.find((option) => option.value === value);

  return (
    <div className={`relative min-w-0 ${className}`}>
      <button
        type="button"
        disabled={disabled}
        aria-label={ariaLabel ?? placeholder}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        data-required={required || undefined}
        onClick={() => setOpen((current) => !current)}
        className={`flex h-11 w-full min-w-0 items-center justify-between gap-3 rounded-[4px] border bg-bazooka-black px-4 text-left text-[10px] outline-none transition-all duration-200 focus-visible:border-bazooka-lime focus-visible:ring-2 focus-visible:ring-bazooka-lime/20 ${
          disabled
            ? "cursor-not-allowed border-bazooka-border text-bazooka-disabled opacity-55"
            : open
              ? "border-bazooka-lime text-white"
              : "border-bazooka-border-strong text-white hover:border-bazooka-lime/70"
        }`}
      >
        <span className={selected ? "truncate text-white" : "truncate text-bazooka-muted"}>{selected?.label ?? placeholder}</span>
        <ChevronDown className={`size-4 shrink-0 text-bazooka-lime transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && !disabled && (
        <div
          id={listId}
          role="listbox"
          aria-label={ariaLabel ?? placeholder}
          className="absolute left-0 right-0 top-[calc(100%+6px)] z-[80] max-h-64 overflow-y-auto rounded-[5px] border border-bazooka-border-strong bg-bazooka-card p-1.5 shadow-2xl"
        >
          {options.map((option) => {
            const active = option.value === value;
            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
                className={`flex min-h-10 w-full items-center rounded-[4px] px-3 text-left text-[10px] transition-colors ${
                  active
                    ? "bg-bazooka-lime text-black"
                    : "text-bazooka-text-secondary hover:bg-bazooka-surface hover:text-bazooka-lime"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
