"use client";

import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

// Dynamic import with no SSR to avoid document errors
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['blockquote', 'code-block'],
    [{ 'align': [] }],
    ['link', 'image', 'video'],
    ['clean']
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet',
  'blockquote', 'code-block',
  'align',
  'link', 'image', 'video'
];

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  return (
    <div className="bg-admin-surface border border-admin-border rounded-lg overflow-hidden [&_.ql-toolbar]:border-none [&_.ql-toolbar]:bg-admin-bg [&_.ql-toolbar]:border-b [&_.ql-toolbar]:border-admin-border [&_.ql-container]:border-none [&_.ql-editor]:text-admin-text [&_.ql-editor]:min-h-[300px] [&_.ql-editor]:text-sm [&_.ql-picker]:text-admin-text [&_button]:text-admin-text">
      <ReactQuill 
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder || 'Write your course description...'}
      />
    </div>
  );
}
