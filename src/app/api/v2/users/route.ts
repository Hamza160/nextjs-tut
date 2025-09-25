export async function GET() {
    const usersList = [
        {id: 1, fullName: "John Doe", name: {firstName: 'John', lastName: 'Doe'}, email: "john@gmail.com"},
        {id: 2, fullName: "Jane Doe", name: {firstName: 'Jane', lastName: 'Doe'}, email: "jane@gmail.com"},
        {id: 3, fullName: "Hamza Ashraf", name: {firstName: 'Hamza', lastName: 'Ashraf'}, email: "hamza@gmail.com"},
    ];

    return new Response(JSON.stringify(usersList));
}