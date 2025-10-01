import { redirect } from "next/navigation"
import { db } from "@/db"
import { create } from "domain";

export default function SnippetCreatePage() {
    async function createSnippet(formData: FormData) {
        // This needs to be a server action
        "use server"

        // check the user's inputs and amke sure they are valid
        const title = formData.get("title") as string;
        const code = formData.get("code") as string;

        if (!title || !code) {
            throw new Error("Title and code are required");
        }

        // create a new record in the database
        const snippet = await db.snippet.create({
            data: {
                title,
                code,
            },
        });
        console.log(snippet);

        // redirect the user to home page
        redirect('/');
        // TODO: redirect to the snippet page
    }

    return (
        <form className="" action={createSnippet}>
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
                <button 
                    className="rounded p-2 bg-blue-200 w-full" 
                    type="submit"
                >Create</button>
            </div>
        </form>
    )
}