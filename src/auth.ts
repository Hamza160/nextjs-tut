import NextAuth, {CredentialsSignin} from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import {getUserByEmail} from "@/data/users";


export const {handlers, signIn, signOut, auth} = NextAuth({
    session:{
        strategy:'jwt'
    },
    providers: [
        Credentials({
            credentials: { email: {}, password: {} },
            authorize: async (credentials) => {
                if (!credentials?.email || !credentials?.password) return null;

                // NOTE: await if your data call is async
                const user = getUserByEmail(credentials?.email);

                if (!user) {
                    // generic but user-friendly code
                    class InvalidUser extends CredentialsSignin {
                        code = "User not found";
                    }
                    throw new InvalidUser();
                }

                const ok = user.password === credentials.password; // replace with hash check
                if (!ok) {
                    class BadCreds extends CredentialsSignin {
                        code = "Invalid credentials";
                    }
                    throw new BadCreds();
                }

                // must return a user-like object
                return user;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,

            // Optional If You are not using any database
            authorization:{
                params:{
                    prompt:"consent", // Everytime you try to authenticate using google you will be asked a consent that you want to continue or not
                    access_type:"offline",
                    response_type:"code",
                }
            }
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,

            // Optional If You are not using any database
            authorization:{
                params:{
                    prompt:"consent", // Everytime you try to authenticate using google you will be asked a consent that you want to continue or not
                    access_type:"offline",
                    response_type:"code",
                }
            }
        })
    ],
})