import Link from "next/link";

export default function F2(){
    return (
        <div>
            <h1>Folder 2</h1>
            <div>
                <Link href={'/f4'}>F4</Link>
            </div>
        </div>
    )
}