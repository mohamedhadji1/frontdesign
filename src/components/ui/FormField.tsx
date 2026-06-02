"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

type FormFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  helperText?: string;
  containerClassName?: string;
};

export function FormField({
  label,
  error,
  helperText,
  containerClassName,
  className,
  required,
  ...props
}: FormFieldProps) {
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
      <input
        id={id}
        required={required}
        aria-invalid={!!error}
        aria-describedby={
          error ? `${id}-error` : helperText ? `${id}-helper` : undefined
        }
        className={cn(
          "bg-zinc-50/50 text-zinc-900 px-4 py-3 w-full text-sm outline-none placeholder:text-zinc-400 border border-zinc-200 rounded-lg transition-all font-medium focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white",
          error && "border-red-500 focus:ring-red-500 focus:border-red-500",
          className
        )}
        {...props}
      />
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
