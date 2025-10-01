'use client';

import type { Snippet } from '@/generated/prisma';

interface SnippetEditFormProps {
    snippet: Snippet;
    // Define any props you might need here
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
    return <div>Snippet Edit Form | {snippet.title}</div>;
}