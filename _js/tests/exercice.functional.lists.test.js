// https://flaviocopes.com/javascript-functional-programming

var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

const imprimerLesNames = (list) => list.forEach((element) => console.log(element));

test('imprime les noms', () => {
    console.log = jest.fn();
    imprimerLesNames(names)
    // The first argument of the first call to the function was 'hello'
    expect(console.log.mock.calls[0][0]).toBe('Ben');
    expect(console.log.mock.calls[1][0]).toBe('Jafar');
})


const numbers = [1, 2, 3, 4, 5];

const toutMultiplierPar2 = (list) => list.map((e) => e*2);


test('should multiply by two', () => {
    expect(toutMultiplierPar2(numbers) ).toEqual([2, 4, 6, 8, 10])
})

const toutMultiplierParN = (list, n) => list.map(e => e*n);

test('should multiply by n', () => {
    expect(toutMultiplierParN(numbers, 5) ).toEqual([5,10,15,20,25])
})



// https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
// What you have
var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
];
// What you need
var officersId = [20, 24, 56, 88]

var officersId2 = [
    { id: 20 },
    { id: 24 },
    { id: 56 },
    { id: 88 }
];


const listOfIds = (list) => list.map(e => e.id);

const listOfIds2 = (list) => list.flatMap(e => [{"id": e.id}]);


test('should return a list of Ids', () => {
    expect(listOfIds(officers)).toStrictEqual(officersId)
})

test('should return a list of Ids', () => {
    expect(listOfIds2(officers)).toStrictEqual(officersId2)
})

const filtrerLesPairs = (list) => list.filter(e => e % 2 === 0);

test('should filter pairs', () => {
    expect(filtrerLesPairs(numbers) ).toEqual([2, 4])
})

const filtrerMatricule = (list) => list.filter(e => e.id > 30)

test('should filter matricule', () => {
    expect(filtrerMatricule(officers) ).toEqual([2, 4])
})

var officersIdSup30 = [
    { id: 56 },
    { id: 88 }
];
test('test chainage', () => {
    expect(listOfIds2(filtrerMatricule(officers)) ).toEqual(officersIdSup30)
    expect(officers.filter(e => e.id > 30).flatMap(e => [{"id": e.id}])).toEqual(officersIdSup30)
})


const summarize = (list) => list.reduce( (acc,val) =>  acc + val , 0 )

test('should add all number in array', () => {
    expect(summarize(numbers) ).toBe(15)
})

const factoriel = (list) => list.reduce( (acc, val) => acc * val , 1)

test('factorial all number in array', () => {
    expect(factoriel(numbers) ).toBe(120)
})



var pilots = [
    {
        id: 10,
        name: "Poe Dameron",
        years: 14,
    },
    {
        id: 2,
        name: "Temmin 'Snap' Wexley",
        years: 30,
    },
    {
        id: 41,
        name: "Tallissan Lintra",
        years: 16,
    },
    {
        id: 99,
        name: "Ello Asty",
        years: 22,
    }
];

// We need to know the total years of experience of all of them
test('should be the sum af years of experience', () => {
    expect(pilots.reduce( (acc, val) => acc + val.years , 0)).toBe(82)
})