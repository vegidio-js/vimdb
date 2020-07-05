import Imdb, { Reference } from '../src'

let imdb: Imdb

beforeAll(async () => {
    jest.setTimeout(60000)
    imdb = new Imdb('en', true)
})

describe('Search for "Dragon Ball" (EN)', () =>
{
    let results: Reference[]

    beforeAll(async () => {
        results = await imdb.search('Dragon Ball')
    })

    test('There are 200 results', () => {
        expect(results.length).toBe(200)
    })

    test('One of the results is "Presença de Anita"', () => {
        expect(results).toContainEqual({ identifier: 'tt0121220', name: 'Dragon Ball Z' })
    })
})

describe('Search for "Presença de Anita" (EN)', () =>
{
    let results: Reference[]

    beforeAll(async () => {
        results = await imdb.search('Presença de Anita')
    })

    test('There are 18 results', () => {
        expect(results.length).toBe(18)
    })

    test('One of the results is "Presença de Anita"', () => {
        expect(results).toContainEqual({ identifier: 'tt0287262', name: 'Presença de Anita' })
    })
})

describe('Search for "Две девицы на мели" (EN)', () =>
{
    let results: Reference[]

    beforeAll(async () => {
        results = await imdb.search('Две девицы на мели')
    })

    test('There is 1 result', () => {
        expect(results.length).toBe(1)
    })

    test('One of the results is "Две девицы на мели"', () => {
        expect(results).toContainEqual({ identifier: 'tt11715972', name: 'Dve devitsy na meli' })
    })
})