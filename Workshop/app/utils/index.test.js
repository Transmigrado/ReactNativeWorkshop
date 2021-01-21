import { calculateMaxValue, sumProp } from './index' 

const data = [
    {
        fat: 600,
        protein: 500,
        carbs: 1200
    },
    {
        fat: 700,
        protein: 100,
        carbs: 900
    },
    {
        fat: 600,
        protein: 300,
        carbs: 1600
    },
    {
        fat: 2000,
        protein: 2000,
        carbs: 2000
    },
    {
        fat: 350,
        protein: 580,
        carbs: 1340
    }
]

it('calcular el maximo valor de un array', () => {
    expect( calculateMaxValue(data)).toEqual(6000)
})

it('sumar todas las propiedades, fat, protein y carbs', () => {
    const item = {
        fat: 600,
        protein: 500,
        carbs: 1200
    }

    expect(sumProp(item)).toEqual(2300)

})