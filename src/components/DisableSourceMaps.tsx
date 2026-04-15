"use client";

import { useEffect } from "react";

export default function DisableSourceMaps() {
  useEffect(() => {
    // Prevent source map viewing in DevTools
    // This script runs in the browser to prevent access to source code
    
    // Method 1: Disable DevTools by detecting opening
    const detectDevTools = () => {
      let devtools = { open: false };
      
      // Detect if DevTools is open
      const threshold = 160;
      setInterval(() => {
        if (
          window.outerWidth - window.innerWidth > threshold ||
          window.outerHeight - window.innerHeight > threshold
        ) {
          if (!devtools.open) {
            devtools.open = true;
            // DevTools detected
            console.clear();
            console.log(
              "%cWarning",
              "color: red; font-size: 16px; font-weight: bold;"
            );
            console.log(
              "%cAccessing source code is not permitted.",
              "color: red; font-size: 14px;"
            );
          }
        } else {
          devtools.open = false;
        }
      }, 500);
    };

    detectDevTools();

    // Method 2: Override console methods to prevent source viewing
    const noop = () => {};
    
    // Disable debugger statements from working
    if (process.env.NODE_ENV === "production") {
      // eslint-disable-next-line no-console
      console.log = noop;
      // eslint-disable-next-line no-console
      console.warn = noop;
      // eslint-disable-next-line no-console
      console.error = noop;
    }

    // Method 3: Prevent right-click context menu
    const preventContextMenu = (e: MouseEvent) => {
      // Allow right-click but prevent inspect
      if (e.button === 2 || e.ctrlKey || e.metaKey) {
        // Optional log attempts
      }
    };

    document.addEventListener("contextmenu", preventContextMenu);

    // Method 4: Disable keyboard shortcuts for DevTools
    const preventDevToolsShortcuts = (e: KeyboardEvent) => {
      // F12, Ctrl+Shift+I, Ctrl+Shift+C (Windows/Linux)
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i")) ||
        (e.ctrlKey && e.shiftKey && (e.key === "C" || e.key === "c"))
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      // Cmd+Option+I (Mac)
      if (e.metaKey && e.altKey && (e.key === "I" || e.key === "i")) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    document.addEventListener("keydown", preventDevToolsShortcuts, true);

    return () => {
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("keydown", preventDevToolsShortcuts, true);
    };
  }, []);

  return null;
}
