
const addOne = (a) => a + 1
const multTwo = (a) => a * 2
const addOneMultTwo = (a) => multTwo(addOne(a))




// returns 12

test('should reverse normal strings', () => {
    expect(addOneMultTwo(5) ).toBe(12)
})

const compose = (f,g) => (a) => f(g(a))
const addOneMultTwoComposed = compose(multTwo, addOne)

test('compose of two functions', () => {
    expect(addOneMultTwoComposed(5)).toBe(12)
})