"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

type SelectFieldProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  helperText?: string;
  containerClassName?: string;
  options: { value: string; label: string; disabled?: boolean }[];
};

export function SelectField({
  label,
  error,
  helperText,
  containerClassName,
  className,
  required,
  options,
  ...props
}: SelectFieldProps) {
  const generatedId = useId();
  const id = props.id || generatedId;

  return (
    <div className={cn("w-full space-y-1.5", containerClassName)}>
      <label
        htmlFor={id}
        className="block text-xs font-bold uppercase text-zinc-500 tracking-wider"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative w-full">
        <select
          id={id}
          required={required}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${id}-error` : helperText ? `${id}-helper` : undefined
          }
          className={cn(
            "bg-zinc-50/50 text-zinc-900 px-4 py-3 w-full text-sm outline-none border border-zinc-200 rounded-lg appearance-none transition-all cursor-pointer font-medium focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white",
            error && "border-red-500 focus:ring-red-500 focus:border-red-500",
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              disabled={opt.disabled}
              className="bg-white text-zinc-900 font-normal"
            >
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
      {error ? (
        <p id={`${id}-error`} className="text-xs text-red-600 font-semibold mt-1">
          {error}
        </p>
      ) : helperText ? (
        <p id={`${id}-helper`} className="text-xs text-zinc-400 font-medium mt-1">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
