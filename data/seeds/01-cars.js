// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '2222222222222',
        make: 'honda',
        model: 'accord',
        mileage: 233000,
        title: 'salvage'
    }, 
    {
        vin: '3333333333333',
        make: 'hyundai',
        model: 'elantra',
        mileage: 200000,
    }
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}