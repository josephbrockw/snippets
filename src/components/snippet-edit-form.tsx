'use client';

import type { Snippet } from '@/generated/prisma';
import Editor from '@monaco-editor/react';
import { useState } from 'react';
import { editSnippet } from '@/actions';

interface SnippetEditFormProps {
    snippet: Snippet;
    // Define any props you might need here
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
    const [code, setCode] = useState(snippet.code || '');

    const handleEditorChange = (value: string = "") => {
        setCode(value);
    };

    const editSnippetAction = editSnippet.bind(null, snippet.id, code);

    return (
        <div>
            <Editor
                height="40vh"
                defaultLanguage="typescript"
                defaultValue={snippet.code || '// Write your code here'}
                theme="vs-dark"
                options={{ 
                    automaticLayout: true,
                    minimap: { enabled: false },
                    fontSize: 14,
                    lineHeight: 22,
                    padding: { top: 10, bottom: 10 }
                }}
                onChange={handleEditorChange}
            />
            <form action={editSnippetAction}>
                <button 
                    className="mt-4 rounded p-2 bg-blue-400 w-full cursor-pointer text-white hover:bg-blue-500 transition" 
                    type="submit"
                >Save</button>
            </form>
        </div>
    ) 
}