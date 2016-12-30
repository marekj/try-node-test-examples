// based on reading https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
describe("Array", function () {

    beforeEach(function () {
        a = ["a", "b"] //sample Array
    });

    it("length returns Number", function () {
        expect(a.length).toEqual(2)
        expect(a.length).toEqual(jasmine.any(Number))
    })

    it("length can be assigned", function () {
        a.length = 5
        expect(a.length).toEqual(5)
        expect(a).toEqual(["a", "b", , , ,]) //undefined elements
    })

    it("index by position returns value", function () {
        expect(a[1]).toEqual("b")
        expect(a[5]).toEqual() //undefined
    })

    it("indexOf value returns its position", function () {
        expect(a.indexOf("a")).toEqual(0)
        expect(a.indexOf("blabla")).toEqual(-1) //not found
    })

    it("slice", function () {
        a = ["a", "b", "c", "d"]
        r = a.slice() //copy entire a
        expect(r).toEqual(a)
        r = a.slice(1) //extract from pos 1 to the end
        expect(r).toEqual(["b", "c", "d"])

        r = a.slice(1, 3) //extract from pos 1 to pos 3
        expect(r).toEqual(["b", "c"])

        r = a.slice(2, 99) //extract from pos 1 to pos 99 which is not there
        expect(r).toEqual(["c", "d"])

        r = a.slice(-3) //last 3 items
        expect(r).toEqual(["b", "c", "d"])

    });

    it("push appends item and returns length", function () {
        r = a.push("c", "d")
        expect(a).toEqual(["a", "b", "c", "d"])
        expect(r).toEqual(4)
    });

    it("pop removes last item and returns it", function () {
        r = a.pop();
        expect(a).toEqual(["a"])
        expect(r).toEqual("b")
    })

    it("shift removes first item and returns it", function () {
        r = a.shift()
        expect(r).toEqual("a")
        expect(a).toEqual(["b"])
    })

    it("unshift prepends item and returns length", function () {
        r = a.unshift("z") //length returned
        expect(r).toEqual(3)
        expect(a).toEqual(["z", "a", "b"])
    })

    it("unshift two elements prepends them and returns length", function () {
        r = a.unshift("z", "x") //length returned
        expect(r).toEqual(4)
        expect(a).toEqual(["z", "x", "a", "b"])
    })

    it("unshift array as element prepends it and returns length", function () {
        r = a.unshift(["z", "x"]) //length returned
        expect(r).toEqual(3)
        expect(a).toEqual([["z", "x"], "a", "b"])
    })

    it("join converts to comma delimited string", function () {
        r = a.join() //converts to string comma between each item
        expect(r).toEqual("a,b")
        expect(r).toEqual(jasmine.any(String)) //converts to String
    })

    it("join with optional separator", function () {
        r = a.join("-bla-") //converts to string comma between each item
        expect(r).toEqual("a-bla-b")
        expect(r).toEqual(jasmine.any(String)) //converts to String
    })

    it("join converts null and undefined to empty string", function () {
        a = [undefined, null, undefined, 3, "bla"]
        r = a.join("-")
        expect(r).toEqual("---3-bla")
    })

    it("forEach yields v i a modifies a which is the same as original a and returns undefined", function () {
        r = a.forEach(
            function (v, i, a) { // this a is the same as the a above
                a[i] = "letter " + v;
            }
        )
        expect(r).toBeUndefined
        expect(a).toEqual(["letter a", "letter b"])
    })

    it("forEach yields v i modifies original a and returns undefined", function () {
        r = a.forEach(
            function (v, i) {
                //this time a is not in yielded list but we operate on original a.
                // don't do this. use map to operate on each element if you want to modify each element in array
                a[i] = "mutant " + v;
            }
        )
        expect(r).toBeUndefined
        expect(a).toEqual(["mutant a", "mutant b"])
    })

    it("forEach that yields 1 items modifies array and returns undefined", function () {
        s = "we got:"; //string
        r = a.forEach(
            function (v) {
                s = s + " " + v; //use join instead of this construct
            }
        )
        expect(r).toBeUndefined
        expect(s).toEqual("we got: a b")
    })

    it("map modifies each element and returns new array", function () {
        r = a.map(function (e) {
            return "letter " + e; // you have to use return keyword here
        })
        expect(r).toEqual(["letter a", "letter b"])
    })

    it("filter selects item matching predicate", function () { //select
        a = [5, 4, 3, 2, 1]
        r = a.filter(function (e) {
            return e < 3
        })
        expect(r).toEqual([2, 1])
    })
})
