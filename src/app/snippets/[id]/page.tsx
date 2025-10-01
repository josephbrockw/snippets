import { notFound } from 'next/navigation';
import Link from 'next/link';
import { db } from '@/db';
import { deleteSnippet } from '@/actions';

interface SnippetPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetPage(props: SnippetPageProps) {
  const snippet = await db.snippet.findUnique({
    where: { id: Number(props.params.id) },
  });

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = deleteSnippet.bind(null, snippet.id);
  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">{snippet.title}</h1>
        <div className="flex gap-2">
          <Link className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" href={`/snippets/${snippet.id}/edit`}>Edit</Link>
          <form action={deleteSnippetAction}>
            <button className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer ml-2">Delete</button>
          </form>
        </div>
      </div>
      <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}