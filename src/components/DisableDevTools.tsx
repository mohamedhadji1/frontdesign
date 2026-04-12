"use client";

import { useEffect } from "react";

export function DisableDevTools() {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable common dev tools shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault();
      }
      // Ctrl+Shift+I / Cmd+Option+I
      if (
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") ||
        (e.metaKey && e.altKey && e.key.toLowerCase() === "i")
      ) {
        e.preventDefault();
      }
      // Ctrl+Shift+J / Cmd+Option+J
      if (
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j") ||
        (e.metaKey && e.altKey && e.key.toLowerCase() === "j")
      ) {
        e.preventDefault();
      }
      // Ctrl+Shift+C / Cmd+Option+C
      if (
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "c") ||
        (e.metaKey && e.altKey && e.key.toLowerCase() === "c")
      ) {
        e.preventDefault();
      }
      // Ctrl+U / Cmd+U (View Source)
      if (
        (e.ctrlKey && e.key.toLowerCase() === "u") ||
        (e.metaKey && e.key.toLowerCase() === "u")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}
