"use server"

export async function sendEmail(formData: FormData): Promise<void> {
    try {
        const fullName = formData.get('fullName')
        const email = formData.get('email')
        console.log(fullName, email)
    } catch (err: unknown) {
        throw new Error(err?.message);
    }
}