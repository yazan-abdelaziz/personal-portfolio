export const swaggerDocument = {
    definition: {
        openapi: '3.0.1',
        info: {
            version: '1.0.0',
            title: 'APIs Document',
            description: 'Personal Portfolio App',
            termsOfService: '',
            contact: {
                name: 'Yazan Abdalaziz',
                email: 'yazan_d.k@hotmail.com',
                url: 'localhost:5000/'
            },
            license: {
                name: 'Apache 2.0',
                url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
            }
        },
        server: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: ["./routes/*.ts"]
}