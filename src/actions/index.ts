'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"; 
import { db } from "@/db";

export async function editSnippet(id: number, code: string) {
    await db.snippet.update({
        where: { id },
        data: { code },
    });
    revalidatePath(`/snippets/${id}`)
    redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
    await db.snippet.delete({
        where: { id },
    });
    revalidatePath('/');
    redirect(`/`);
}
    

export async function createSnippet(formState: {message: string}, formData: FormData) {
    try {
        // check the user's inputs and amke sure they are valid
        const title = formData.get("title");
        const code = formData.get("code");

        // Validation
        if (typeof title !== "string" || title.length < 3) {
            return {
                message: "Title must be longer.",
            }
        }

        if (typeof code !== "string" || code.length < 10) {
            return {
                message: "Code must be longer.",
            }
        }

        // create a new record in the database
        const snippet = await db.snippet.create({
            data: {
                title,
                code,
            },
        });
        console.log(snippet);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return { message: error.message };
        } else {
            return { message: 'Something went wrong. Please try again later.' };
        }
    }

    // revalidate the home page
    revalidatePath('/');
    // redirect the user to home page
    redirect('/');
}
