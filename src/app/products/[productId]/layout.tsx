const generateRandomInt = (count: number) => {
    return Math.floor(Math.random() * count);
}
export default function ProductDetailsLayout({children}:{ children:React.ReactNode}){
    const random = generateRandomInt(2);
    if(random === 1){
        throw new Error("Error loading product")
    }
    return (
        <div>
            {children}
            <h2>Featured Products</h2>
        </div>
    )
}