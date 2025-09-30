import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [
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