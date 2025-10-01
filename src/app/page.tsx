import Link from 'next/link';
import { db } from '@/db';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link key={snippet.id} href={`/snippets/${snippet.id}`}>
        <div className="border flex justify-between items-center rounded p-4 mb-4" >
          <h3 className="font-bold text-lg mb-2">{snippet.title}</h3>
          <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">View</button>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <div className="flex justify-between items-center m-2">
        <h1 className="text-2xl font-bold mb-4">Snippets</h1>
        <Link href="/snippets/new" className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer">
          New
        </Link>
      </div>
      <div>
        {renderedSnippets}
      </div>
    </div>
  );
}
