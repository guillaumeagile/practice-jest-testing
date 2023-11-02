// https://flaviocopes.com/javascript-functional-programming

var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

const imprimerLesNomes = () => console.log("ooooh");


const numbers = [1, 2, 3, 4, 5];

const toutMultiplierPar2 = (list) => list;

const toutMultiplierParN = (list, n) => list;

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


const filtrerLesPairs = (list) => list;





const summarize = (list) => list.reduce( (acc,val) =>  acc , 0 )

test('should add all number in array', () => {
    expect(summarize(numbers) ).toBe(15)
})

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