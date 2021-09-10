const appCode = require("./index");
jest.mock("lodash");

describe("test handlerequest", () => {
    // 1st test
    it("Test for 'closeConnections()'", () => {
        const result = appCode.closeConnections("something");
        expect(result).toBe(true);
    });
    // 2nd test
    it("Test for 'processRequest()'", () => {
        appCode.closeConnections = jest.fn().mockReturnValue(false);
        // method 1
        // try {
        //     result = appCode.processRequest(() => {
        //         console.log("hello");
        //     });
        // } catch (error) {
        //     expect(error).toEqual(new Error("Internal server error"));
        // }
        // method 2
        expect(() => {
            appCode.processRequest(
                jest.fn(() => {
                    console.log("something");
                })
            );
        }).toThrow("Internal server error");
    });

    it("Test for handleRequest()", () => {
        const mockfunc = jest.fn(() => {
            console.log("mock implementation");
        });
        expect(() => {
            appCode.handleRequest(mockfunc, "");
        }).toThrow("username is undefined");
    });
});
