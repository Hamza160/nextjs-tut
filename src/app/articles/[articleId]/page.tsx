import Link from "next/link";

interface Props{
    params: Promise<{articleId:string}>
    searchParams: Promise<{lang?: "en" | "es" | "fr"}>
}
export default async function ArticleDetailPage({params, searchParams}: Props)  {
    const {articleId} = await params;
    const {lang = "en"} = await searchParams;
    return (
        <div>
            <h1>News Articles {articleId}</h1>
            <p>Reading in Language {lang}</p>

            <div>
                <Link href={`/articles/${articleId}?lang=${lang}`}>English</Link>
                <Link href={`/articles/${articleId}?lang=${lang}`}>Spanish</Link>
                <Link href={`/articles/${articleId}?lang=${lang}`}>French</Link>
            </div>
        </div>
    )
}