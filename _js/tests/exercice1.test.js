
const addOne = (a) => a + 1
const multTwo = (a) => a * 2
const addOneMultTwo = (a) => multTwo(addOne(a))

const power = (a) => a * a

test('should return 25', () => {
    expect(power(5) ).toBe(25)
})

// returns 12

test('should reverse normal strings', () => {
    expect(addOneMultTwo(5) ).toBe(12)
})

const compose = (f,g) => (a) => f(g(a))
const addOneMultTwoComposed = compose(multTwo, addOne)

test('compose of two functions', () => {
    expect(addOneMultTwoComposed(5)).toBe(12)
})

test('compose of three functions', () => {
    expect(compose(multTwo, addOne) (5) ).toBe(12)
})




const compose2 = (...funs) => (a) => funs.reduceRight((res, fn) => fn(res), a)
test('compose of three functions', () => {
    expect(compose2(power, multTwo, addOne) (5) ).toBe(144)
    expect(compose2(addOne) (5) ).toBe(6)
    expect(compose2() (5) ).toBe(5)
})

