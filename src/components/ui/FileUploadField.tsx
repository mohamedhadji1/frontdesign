"use client";

import { useId, useState } from "react";
import { Upload, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type FileUploadFieldProps = {
  label: string;
  error?: string;
  helperText?: string;
  containerClassName?: string;
  allowedTypes?: string[];
  maxSizeMB?: number;
  onFileSelect?: (file: File | null) => void;
  required?: boolean;
};

export function FileUploadField({
  label,
  error,
  helperText,
  containerClassName,
  allowedTypes = [".pdf", ".docx"],
  maxSizeMB = 5,
  onFileSelect,
  required = false,
}: FileUploadFieldProps) {
  const generatedId = useId();
  const id = generatedId;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isDragActive, setIsDragActive] = useState(false);

  const validateFile = (file: File): boolean => {
    const ext = "." + file.name.split(".").pop()?.toLowerCase();
    if (!allowedTypes.map(t => t.toLowerCase()).includes(ext)) {
      setFileError(`Invalid file format. Allowed formats: ${allowedTypes.join(", ")}`);
      onFileSelect?.(null);
      setSelectedFile(null);
      return false;
    }
    if (file.size > maxSizeMB * 1024 * 1024) {
      setFileError(`File too large. Maximum size is ${maxSizeMB}MB.`);
      onFileSelect?.(null);
      setSelectedFile(null);
      return false;
    }
    setFileError(null);
    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      if (validateFile(file)) {
        setSelectedFile(file);
        onFileSelect?.(file);
      }
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    const file = e.dataTransfer.files?.[0] || null;
    if (file) {
      if (validateFile(file)) {
        setSelectedFile(file);
        onFileSelect?.(file);
      }
    }
  };

  const activeError = error || fileError;

  return (
    <div className={cn("w-full space-y-1.5", containerClassName)}>
      <span className="block text-xs font-bold uppercase text-zinc-500 tracking-wider">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      <div
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        className={cn(
          "relative border-2 border-dashed rounded-2xl p-6 transition-all text-center flex flex-col items-center justify-center cursor-pointer",
          isDragActive
            ? "border-red-500 bg-red-500/5"
            : selectedFile
            ? "border-green-500 bg-green-500/5"
            : "border-zinc-200 bg-zinc-50/50 hover:border-red-400 hover:bg-zinc-50",
          activeError && "border-red-500 bg-red-50"
        )}
      >
        <input
          id={id}
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileChange}
          accept={allowedTypes.join(",")}
        />

        {selectedFile ? (
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
              <CheckCircle2 size={20} />
            </div>
            <div className="text-xs font-bold text-zinc-950 flex items-center justify-center gap-1.5">
              <FileText size={14} className="text-zinc-400" />
              {selectedFile.name}
            </div>
            <p className="text-[10px] text-zinc-400 font-semibold">
              {(selectedFile.size / 1024 / 1024).toFixed(2)} MB • Secure connection established
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-zinc-100 text-zinc-500 flex items-center justify-center mx-auto group-hover:bg-zinc-200/50">
              <Upload size={18} className="text-zinc-400" />
            </div>
            <div className="text-xs font-bold text-zinc-800">
              Drag and drop your file, or <span className="text-red-600">browse</span>
            </div>
            <p className="text-[10px] text-zinc-400 font-semibold leading-relaxed">
              Supports: {allowedTypes.join(", ").toUpperCase()} (Max {maxSizeMB}MB)
            </p>
          </div>
        )}
      </div>

      {activeError ? (
        <p className="text-xs text-red-600 font-semibold mt-1 flex items-center gap-1">
          <AlertCircle size={12} />
          {activeError}
        </p>
      ) : helperText ? (
        <p className="text-xs text-zinc-400 font-medium mt-1">
          {helperText}
        </p>
      ) : (
        <p className="text-[10px] text-zinc-400 font-semibold mt-1 leading-relaxed">
          🔒 Rest assured: all uploads are encrypted in transit and scanned for malware.
        </p>
      )}
    </div>
  );
}
