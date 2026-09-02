"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";

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
  const [activeIndex, setActiveIndex] = useState(() => Math.max(0, options.findIndex((option) => option.value === value)));
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const selected = options.find((option) => option.value === value);

  useEffect(() => {
    const selectedIndex = options.findIndex((option) => option.value === value);
    if (selectedIndex >= 0) setActiveIndex(selectedIndex);
  }, [options, value]);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const choose = (index: number) => {
    const option = options[index];
    if (!option) return;
    onChange(option.value);
    setActiveIndex(index);
    setOpen(false);
  };

  const handleTriggerKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      setOpen(true);
      setActiveIndex((current) => {
        if (!options.length) return 0;
        return (current + direction + options.length) % options.length;
      });
      return;
    }
    if ((event.key === "Enter" || event.key === " ") && open) {
      event.preventDefault();
      choose(activeIndex);
    }
  };

  return (
    <div ref={rootRef} className={`relative min-w-0 ${className}`}>
      <button
        type="button"
        disabled={disabled}
        aria-label={ariaLabel ?? placeholder}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-required={required || undefined}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={handleTriggerKeyDown}
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
          {options.map((option, index) => {
            const active = option.value === value;
            const keyboardActive = index === activeIndex;
            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={active}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => choose(index)}
                className={`flex min-h-10 w-full items-center rounded-[4px] px-3 text-left text-[10px] transition-colors ${
                  active
                    ? "bg-bazooka-lime text-black"
                    : keyboardActive
                      ? "bg-bazooka-surface text-bazooka-lime"
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
