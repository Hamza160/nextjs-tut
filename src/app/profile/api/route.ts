import {NextRequest} from "next/server";
import {headers} from "next/headers";
export async function GET(req: NextRequest)
{
    // const requestHeaders = new Headers(req.headers);
    // console.log(requestHeaders.get('Authorization'));

    const headerList = await headers();
    console.log(headerList.get("Authorization"));

    return new Response('<h1>Hello Profile!</h1>', {
        headers: {
            'Content-type': 'text/html',
        }
    });
}