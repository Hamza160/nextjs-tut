export const dynamicParams = false;
export async function generateStaticParams() {
    return [
        {id:"1"},
        {id:"2"},
        {id:"3"},
        {id:"4"},
    ]
}
export default async function ProductPage({params}:{params:Promise<{id:string}>})  {
    const {id} = await params
    return (
        <h1>Product Details For Product {id} {new Date().toLocaleTimeString()}</h1>
    )
}