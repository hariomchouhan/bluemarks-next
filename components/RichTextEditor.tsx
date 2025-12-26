"use client";

import { useRef, useState, useMemo } from "react";
import dynamic from "next/dynamic";

// Dynamically import JoditEditor to avoid SSR issues
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder = "Enter content...",
}: RichTextEditorProps) {
  const editorRef = useRef<any>(null);

  const config = useMemo(() => {
    return {
      readonly: false,
      placeholder: placeholder,
      minHeight: 300,
    };
  }, [placeholder]);

  return (
    <div className="rich-text-editor">
      <JoditEditor
        value={value}
        config={config}
        onBlur={(newContent: string) => onChange(newContent)}
        onChange={(newContent: string) => {
          // Only update on actual content changes, not on every keystroke
          if (newContent !== value) {
            onChange(newContent);
          }
        }}
        ref={editorRef}
      />
    </div>
  );
}
