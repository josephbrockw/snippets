import { db } from '@/db';
import { notFound } from 'next/navigation';
import SnippetEditForm from '@/components/snippet-edit-form';

interface SnippetEditPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
    const params = await props.params;
    const id = Number(params.id);
    const snippet = await db.snippet.findUnique({
        where: { id },
    });

    if (!snippet) {
        return notFound();
    }

    return (
        <div>
            <h1 className="text-xl font-bold">Edit Snippet {id}</h1>
            <SnippetEditForm snippet={snippet} />
        </div>
    );
}