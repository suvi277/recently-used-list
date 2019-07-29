describe("Recently Used List", function() {
    var myList;
    
    beforeEach(function () {
      myList = new RecentlyUsedList();
    });

    describe("when initialized", function() {
        it("is a constructable object", function () {
            expect(myList).toEqual(jasmine.any(Object));
        });

        it("`list` property to be defined", function () {
            expect(myList.list).toBeDefined();  
        });

        it("`upperLimit` property to be defined", function () {
            expect(myList.upperLimit).toBeDefined();  
        });

        it("`list` property to be an array and empty", function () {
            expect(myList.list).toEqual([]);  
        });

        it("`upperLimit` property to set 10 value", function () {
            expect(myList.upperLimit).toBe(10);  
        });
    });

    describe("when `setUpperLimit` method is called", function() {
        it("sets the upperLimit value", function () {
            myList.setUpperLimit(5);

            expect(myList.upperLimit).toBe(5);  
        });
    });

    describe("when `add` method is called", function() {
        var expected = ["string 1"];

        describe("with `integer` passed as an argument", function() {
            it("should not add item to list", function () {
                myList.add(1);

                expect(myList.list.indexOf(1)).toEqual(-1);
            });
        });

        describe("with `string` passed as an argument", function() {
            beforeEach(function () {
                  myList.add("string 1");
            });

            it("adds the string item `string 1` to the list", function () {
                myList.add("string 1");

                expect(myList.list).toEqual(expected);
            });

            describe("when `size` method is called", function() {
                it("returns the length of the array", function () {
                    expect(myList.size()).toEqual(1);
                });
            });

            describe("when `add` method is called again", function() {
                it("increase the length of the array by 1", function () {
                    myList.add("string 2");

                    expect(myList.size()).toEqual(2);
                });
            });

            it("should not add empty string to list", function () {
                myList.add("");

                expect(myList.list.indexOf("")).toEqual(-1);
            });

            it("should not add duplicate string to list", function () {
                myList.add("string 1");

                expect(myList.list.length).toEqual(1);
            });
        });
    });

    describe("when list is created", function() {
        beforeEach(function () {
          myList.add("string 1");
          myList.add("string 2");
          myList.add("string 3");
          myList.add("string 4");
          myList.add("string 5");
        });

        describe("`Last in First Out`", function() {
            it("adds the item `string 5`, most recently added item to the first in the list", function () {
                expect(myList.first()).toEqual("string 5");
            });

            it("adds the item `string 1` least added item to the last in the list", function () {
                expect(myList.last()).toEqual("string 1");
            });
        });
        
        describe("when `remove` method is called", function() {
            it("it removes the oldest item in the list i.e item `1`", function () {
                expect(myList.remove()).toEqual("string 1");
                expect(myList.size()).toEqual(4);
            });
        });

        describe("when `lookUpBy` method is called", function() {
            it("it gives the list item by index number", function () {
                expect(myList.lookUpBy(2)).toEqual("string 3");
            });
        });

        describe("when `list` reaches the upperLimit", function() {
            beforeEach(function() {
                myList.setUpperLimit(5);
                myList.add("string 6");
            });

            it("list size should set to 5", function () {
                expect(myList.size()).toEqual(5);
            });

            it("should drops the least added item  i.e `string 1` from the list ", function () {
                expect(myList.last()).not.toEqual("string 1");
            });
        });
    });
});