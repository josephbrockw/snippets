'use client'

interface ErrorPageProps {
    error: Error;
    reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
    return (
        <div className="p-4 bg-red-100 text-red-700 rounded">
            <h2 className="font-bold">Error</h2>
            <p className="">{error.message}</p>
            <button className="mt-2 p-2 rounded" onClick={reset}>Try Again</button>
        </div>
    );
}