"use client"
import Link from "next/link";
import {use} from "react"
interface Props{
    params: Promise<{articleId:string}>
    searchParams: Promise<{lang?: "en" | "es" | "fr"}>
}
export default function ArticleDetailPage({params, searchParams}: Props)  {
    const {articleId} = use(params);
    const {lang = "en"} = use(searchParams);
    return (
        <div>
            <h1>News Articles {articleId}</h1>
            <p>Reading in Language {lang}</p>

            <div>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link href={`/articles/${articleId}?lang=fs`}>Spanish</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
            </div>
        </div>
    )
}