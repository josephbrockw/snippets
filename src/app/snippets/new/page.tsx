'use client'

import { createSnippet } from "@/actions"
import { useActionState, startTransition } from "react"

export default function SnippetCreatePage() {
    const [formState, action] = useActionState(
        createSnippet,
        { message: '' }
    );

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        startTransition(() => {
            action(formData);
        });
    }

    return (
        <form className="" onSubmit={handleSubmit}>
            <h3 className="m-3 font-bold">Create Snippet</h3>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="title">Title</label>
                    <input 
                        className="rounded border p-2 w-full" 
                        type="text" 
                        name="title" 
                        id="title" 
                    />
                </div>
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="code">Code</label>
                    <textarea 
                        className="rounded border p-2 w-full" 
                        name="code" 
                        id="code" 
                        rows={10}
                    />
                </div>
                {formState.message ? (
                    <p className="my-2 p-2 bg-red-400 border rounded border-red-400 text-white text-center">{formState.message}</p>
                ): null}
                <button 
                    className="rounded p-2 bg-blue-200 w-full hover:bg-blue-400 disabled:opacity-50 text-white cursor-pointer" 
                    type="submit"
                >Create</button>
            </div>
        </form>
    )
}