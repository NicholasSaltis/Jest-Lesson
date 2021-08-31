
let { repeatMessage } = require('../source/index');


describe("repeatMessage Functionality", () => {

    test("repeatMessage is a function", () => {
        expect(typeof(repeatMessage)).toBe("function");
    });

    test("if given 'hello' as input with 3 as repeat should return hellohellohello", () => {
        expect(repeatMessage("hello",3)).toBe("hellohellohello")
    });

})

describe("repeatMessage error handling", () => {

    test("should throw an error if no string provided for message", () => {
        expect(() => {repeatMessage(1,1)}).toThrow();
    });

    test('should throw an error if no number is provided for 2nd argument', () => {
        expect(() => {repeatMessage("hello", "world")}).toThrow();
    });
})