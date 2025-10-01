import { db } from '@/db';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <div key={snippet.id} className="border rounded p-4 mb-4">
        <h3 className="font-bold text-lg mb-2">{snippet.title}</h3>
        <pre className="bg-gray-100 p-2 rounded">
          <code>{snippet.code}</code>
        </pre>
      </div>
    );
  });

  return <div>{renderedSnippets}</div>;
}
