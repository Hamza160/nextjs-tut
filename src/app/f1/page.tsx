import Link from "next/link";

export default function F1(){
    return (
        <div>
            <h1>Folder 1</h1>
            <div>
                <Link href={'/f1/f2'}>F2</Link>
                <Link href={'/f3'}>F3</Link>
            </div>
        </div>
    )
}