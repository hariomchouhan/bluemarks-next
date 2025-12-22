"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

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
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<any>(null);

  useEffect(() => {
    // Get Quill instance
    const getQuillInstance = () => {
      const editor = editorRef.current?.querySelector(".ql-editor") as any;
      if (editor?.__quill) {
        quillRef.current = editor.__quill;
      }
    };
    setTimeout(getQuillInstance, 100);
    
    // Add custom toolbar buttons after component mounts
    const addCustomButtons = () => {
      const toolbar = editorRef.current?.querySelector(".ql-toolbar");
      if (toolbar && !toolbar.querySelector(".custom-button-btn")) {
        // Create separator
        const separator = document.createElement("span");
        separator.className = "ql-formats";
        separator.style.marginLeft = "10px";
        separator.style.marginRight = "10px";
        separator.style.borderLeft = "1px solid #ccc";
        separator.style.paddingLeft = "10px";
        
        // Add Button button
        const buttonButton = document.createElement("button");
        buttonButton.type = "button";
        buttonButton.className = "ql-button custom-button-btn";
        buttonButton.setAttribute("title", "Insert Button");
        buttonButton.innerHTML = '<svg viewBox="0 0 18 18"><rect class="ql-stroke" height="10" width="12" x="3" y="4" rx="2"></rect><line class="ql-stroke" x1="9" x2="9" y1="4" y2="14"></line></svg>';
        buttonButton.style.cssText = "width: 28px; height: 24px; display: inline-block; cursor: pointer; border: none; background: transparent; padding: 3px 5px; margin: 0 2px;";
        buttonButton.onclick = (e) => {
          e.preventDefault();
          
          // Get editor and quill references first
          const editor = editorRef.current?.querySelector(".ql-editor") as HTMLElement;
          const quill = quillRef.current;
          
          // Save current selection before showing prompts
          let savedRange: any = null;
          let savedSelection: Range | null = null;
          
          if (quill) {
            savedRange = quill.getSelection(true);
          }
          
          const currentSelection = window.getSelection();
          if (currentSelection && currentSelection.rangeCount > 0) {
            savedSelection = currentSelection.getRangeAt(0).cloneRange();
          }
          
          const buttonText = prompt("Enter button text:");
          const buttonUrl = prompt("Enter button URL (optional, leave empty for plain button):");
          
          if (buttonText && editor) {
            // Restore selection if it was lost
            if (savedRange && quill) {
              quill.setSelection(savedRange.index, savedRange.length, 'api');
            } else if (savedSelection) {
              const selection = window.getSelection();
              if (selection) {
                selection.removeAllRanges();
                selection.addRange(savedSelection);
              }
            }
            
            const buttonHTML = buttonUrl
              ? `<a href="${buttonUrl}" class="button-link" style="display: inline-block; padding: 12px 24px; background: linear-gradient(to right, #2563eb, #9333ea); color: white; border-radius: 8px; font-weight: 600; text-decoration: none; margin: 10px 0; transition: all 0.3s;">${buttonText}</a>`
              : `<button class="custom-button" style="display: inline-block; padding: 12px 24px; background: linear-gradient(to right, #2563eb, #9333ea); color: white; border-radius: 8px; font-weight: 600; border: none; margin: 10px 0; cursor: pointer; transition: all 0.3s;">${buttonText}</button>`;
            
            // Use DOM-based insertion for better cursor position handling
            const selection = window.getSelection();
            
            if (selection && selection.rangeCount > 0) {
              try {
                const domRange = selection.getRangeAt(0);
                const container = domRange.commonAncestorContainer;
                
                // Create button element
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = buttonHTML;
                const buttonElement = tempDiv.firstChild as HTMLElement;
                
                // Find the paragraph or block element containing the cursor
                let targetElement: HTMLElement | null = null;
                
                if (container.nodeType === Node.TEXT_NODE) {
                  const parent = container.parentElement;
                  if (parent) {
                    // Find the closest block element (p, div, etc.)
                    targetElement = parent.closest('p, div, h1, h2, h3, h4, h5, h6, blockquote') as HTMLElement;
                    if (!targetElement) targetElement = parent as HTMLElement;
                  }
                } else if (container.nodeType === Node.ELEMENT_NODE) {
                  const element = container as HTMLElement;
                  targetElement = element.closest('p, div, h1, h2, h3, h4, h5, h6, blockquote') as HTMLElement;
                  if (!targetElement) targetElement = element;
                }
                
                if (targetElement && targetElement.parentNode) {
                  // Insert button after the target element
                  const breakAfter = document.createElement('p');
                  breakAfter.innerHTML = '<br>';
                  
                  if (targetElement.nextSibling) {
                    targetElement.parentNode.insertBefore(buttonElement.cloneNode(true) as HTMLElement, targetElement.nextSibling);
                    targetElement.parentNode.insertBefore(breakAfter, targetElement.nextSibling?.nextSibling || null);
                  } else {
                    targetElement.parentNode.appendChild(buttonElement.cloneNode(true) as HTMLElement);
                    targetElement.parentNode.appendChild(breakAfter);
                  }
                  
                  // Update onChange
                  onChange(editor.innerHTML);
                  
                  // Move cursor after button
                  if (quill) {
                    setTimeout(() => {
                      const newLength = quill.getLength();
                      quill.setSelection(newLength - 1, 0, 'api');
                    }, 50);
                  }
                } else {
                  // Fallback: append to end
                  const currentHTML = editor.innerHTML;
                  const newHTML = currentHTML + '<p><br></p>' + buttonHTML + '<p><br></p>';
                  editor.innerHTML = newHTML;
                  onChange(newHTML);
                }
              } catch (error) {
                // Error occurred, append to end
                const currentHTML = editor.innerHTML;
                const newHTML = currentHTML + '<p><br></p>' + buttonHTML + '<p><br></p>';
                editor.innerHTML = newHTML;
                onChange(newHTML);
              }
            } else {
              // No selection, append to end
              const currentHTML = editor.innerHTML;
              const newHTML = currentHTML + '<p><br></p>' + buttonHTML + '<p><br></p>';
              editor.innerHTML = newHTML;
              onChange(newHTML);
            }
          }
        };
        
        // Create a formats container for custom buttons
        const customFormats = document.createElement("span");
        customFormats.className = "ql-formats";
        customFormats.appendChild(buttonButton);
        
        // Insert before the clean button or at the end
        const cleanButton = toolbar.querySelector(".ql-clean");
        if (cleanButton && cleanButton.parentElement) {
          cleanButton.parentElement.insertBefore(separator, cleanButton);
          cleanButton.parentElement.insertBefore(customFormats, cleanButton);
        } else {
          toolbar.appendChild(separator);
          toolbar.appendChild(customFormats);
        }
      }
    };

    // Try once after a short delay to ensure toolbar is ready
    const timer = setTimeout(addCustomButtons, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [onChange]);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "color",
    "background",
    "align",
  ];

  return (
    <div className="rich-text-editor" ref={editorRef}>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        className="bg-white"
      />
      <style jsx global>{`
        .rich-text-editor .ql-container {
          min-height: 300px;
          font-size: 16px;
        }
        .rich-text-editor .ql-editor {
          min-height: 300px;
        }
        .rich-text-editor .ql-toolbar .ql-button {
          width: 28px;
          height: 24px;
          display: inline-block;
          cursor: pointer;
          border: none;
          background: transparent;
          padding: 3px 5px;
          margin: 0 2px;
        }
        .rich-text-editor .ql-toolbar .ql-button:hover {
          background-color: #f0f0f0;
          border-radius: 3px;
        }
        .rich-text-editor .ql-toolbar .ql-button svg {
          width: 18px;
          height: 18px;
          display: block;
        }
        .rich-text-editor .ql-toolbar .ql-button svg .ql-stroke {
          stroke: #444;
          stroke-width: 2;
          fill: none;
        }
      `}</style>
    </div>
  );
}
