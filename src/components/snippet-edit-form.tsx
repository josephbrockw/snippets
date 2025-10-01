'use client';

import type { Snippet } from '@/generated/prisma';
import Editor from '@monaco-editor/react';
import { useState } from 'react';

interface SnippetEditFormProps {
    snippet: Snippet;
    // Define any props you might need here
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
    const [code, setCode] = useState(snippet.code || '');

    const handleEditorChange = (value: string = "") => {
        setCode(value);
    };

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
            {/* Add form fields and buttons as needed */}
        </div>
    ) 
}