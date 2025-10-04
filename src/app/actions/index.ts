"use server"
import {CredentialsSignin, AuthError} from 'next-auth'
import {signIn, signOut} from "@/auth";
export async function doSocialLogin (formData: any){
    const action: string = formData.get('action');
    await signIn(action, {redirectTo: '/home'});
}

export async function doCredentialsLogin(formData: FormData) {
    try {
        // disable auto-redirect so we can return a value
        await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false,
        });
        return { ok: true };
    } catch (err) {
        // v5 throws; decode useful bits
        if (err instanceof CredentialsSignin) {
            return { error: err.code || "Invalid credentials" };
        }
        if (err instanceof AuthError) {
            // Could be CallbackRouteError, etc.
            return { error: err.type || "AuthError" };
        }
        return { error: "Unexpected error" };
    }
}

export async function doLogout (){
    await signOut({redirectTo: '/'});
}