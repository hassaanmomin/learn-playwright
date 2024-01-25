const { test, expect } = require("@playwright/test")

test.describe('API Tests', () => {
    let userID
    
    test('GET Request', async ({ request }) => {
        const response = await request.get('https://reqres.in/api/users?page=2')
        console.log(await response.json())
        expect(response.status()).toBe(200)
    })

    test('POST Request', async ({ request }) => {
        const response = await request.post('https://reqres.in/api/users', {
            data: {
                "name": "morpheus",
                "job": "leader"
            },
            headers: {
                "Accept": "application/json"
            }
        })
        console.log(await response.json())
        expect(response.status()).toBe(201)
        const res = await response.json()
        userID = res.id
    })

    test('PUT Request', async ({ request }) => {
        const response = await request.put('https://reqres.in/api/users/2', {
            data: {
                "name": "jhon wick",
                "job": "legend"
            },
            headers: {
                "Accept": "application/json"
            }
        })
        console.log(await response.json())
        expect(response.status()).toBe(200)
    })

    test('DELETE Request', async ({ request }) => {
        const response =  request.delete('https://reqres.in/api/users/2')
        expect((await response).status()).toBe(204)
    })
})