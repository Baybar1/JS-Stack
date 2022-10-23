const { faker } = require('@faker-js/faker');
const express = require('express');
const app = express();
const port = 8000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const createUser = () => ({
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.name.lastName,
    firstName: faker.name.firstName(),
    _id: faker.datatype.number()
})



const createCompany = () => ({
        _id: faker.datatype.number(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
})



app.get('/api/users/new', (req, res) => {
    const newUser = createUser();
    res.json(newUser)
})


app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany)
})


app.get('/api/users/company', (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json([newUser,newCompany])
})

app.listen(port, () => { console.log(`Loaded on Port : ${port}`) })