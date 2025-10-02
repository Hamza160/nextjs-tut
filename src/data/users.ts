export const users = [
    { "email": "hamzaashraf160@gmail.com", "password": "password" },
    { "email": "admin@gmail.com", "password": "password" },
    { "email": "carlos@example.com", "password": "C@rl0s-88_secure" },
    { "email": "diana@example.com", "password": "Di4n@_Safe*Key7" },
    { "email": "elena@example.com", "password": "El3n@2025$Strong" },
    { "email": "farhan@example.com", "password": "F@rh4n-Dev!42" },
    { "email": "greta@example.com", "password": "Gr3t@_Login#1" },
    { "email": "hazel@example.com", "password": "H@z3l.Secret*9" },
    { "email": "imran@example.com", "password": "Imr4n!Access2025" },
    { "email": "julia@example.com", "password": "Jul!@_Pwd#77" }
]

export const getUserByEmail = (email: string) => {
    return users.find((user) => user.email === email);
}