describe("String", function () {

    beforeEach(function () {
        s = "Mellow Yellow" //sample String
    });


    it("length returns Number", function () {
        expect(s.length).toEqual(13)
        expect(s.length).toEqual(jasmine.any(Number))
    })

    it("length assign", function () {
        s.length = 6 //allowed but does not change value
        expect(s.length).toEqual(13)
    })


})
