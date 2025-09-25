import {NextRequest} from "next/server";
import {headers, cookies} from "next/headers";
export async function GET(req: NextRequest)
{
    // const requestHeaders = new Headers(req.headers);
    // console.log(requestHeaders.get('Authorization'));

    const headerList = await headers();
    console.log(headerList.get("Authorization"));

    const theme = req.cookies.get("theme")
    console.log(theme);

    const cookieStore = await cookies()
    cookieStore.set('resultPerPage', "20")
    console.log(cookieStore.get('resultPerPage'))
    // TODO:: Cookie More Methods Has and Delete
    return new Response('<h1>Hello Profile!</h1>', {
        headers: {
            'Content-type': 'text/html',
            'Set-Cookie': 'theme=dark'
        }
    });
}