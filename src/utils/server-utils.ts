import "server-only"
export const serverSideFunction = () => {
    console.log(`
        use multiple libraries,
        user envoirnment variables,
        interact with a database,
        process confidential information
    `);
    return `Server Result`;
}