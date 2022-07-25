import NextAuth from "next-auth"
import CredentialProvider from "next-auth/providers/credentials"

export default NextAuth({
    providers: [
        CredentialProvider({
            name: "credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            authorize: (credentials) => {
                if (credentials.username === process.env.AUTH_USER && credentials.password === process.env.AUTH_PASS) {
                    return {
                        id: 1,
                        name: "admin"
                    }
                }
                return null;
            },
        })
    ],
    secret: "test",
    jwt: {
        secret: "test",
        encryption: true
    }
})