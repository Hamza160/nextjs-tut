export const users = [
    {email:"admin@gmail.com", password:"password"},
]

export const getUserByEmail = (email: string) => {
    const found = users.find((user) => user.email === email)
    return found;
}