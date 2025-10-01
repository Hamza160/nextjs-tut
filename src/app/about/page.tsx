import {cookies} from 'next/headers'

export default async function AboutPage() {
    const coookieStore= await cookies()
    const theme = coookieStore.get("theme")
    console.log(theme)
    return <h1>About Page {new Date().toLocaleTimeString()}</h1>
}