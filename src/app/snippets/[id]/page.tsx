import { notFound } from 'next/navigation';
import { db } from '@/db';

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

  console.log(props);

  return (
    <div>{snippet.title}</div>
  );
}