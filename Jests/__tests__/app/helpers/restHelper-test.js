const asyncAssert = (testFunc) => {
  jest.useRealTimers();
  return new Promise((resolve, reject) => {
    window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
    window.setTimeout(() => {
      testFunc();
      resolve();
    }, 300);
  });
};

describe("The API Helper", () => {
    it("should call the get from restHelper", () => {
        let $ = require('jquery');
        let restHelper = require.requireActual('../../../app/helpers/restHelper.js'); 
        let testUrl = 'api/test';

        restHelper.get(testUrl);

        expect($.ajax).toBeCalledWith({
            type:"GET",
            url: testUrl,
            dataType: "json",
            success: jasmine.any(Function),
            error: jasmine.any(Function)
        })
    })

    it("should call the del from restHelper", () => {
        let $ = require('jquery');
        let restHelper = require.requireActual('../../../app/helpers/restHelper.js'); 
        let testUrl = 'api/test';

        restHelper.del(testUrl);

        expect($.ajax).toBeCalledWith({
            type:"DELETE",
            url: testUrl,
            success: jasmine.any(Function),
            error: jasmine.any(Function)
        })
    })

    it("should send over the correct values from jquery", () => {
        let returnedValue = null;
        let value = {test: true};
        let $ = require('jquery');
        $.ajax.mockImplementation((obj) => {
            obj.success(value);
        });
        let restHelper = require.requireActual('../../../app/helpers/restHelper.js'); 
        let testUrl = 'api/test';

        restHelper.get(testUrl).then((a) => {
            returnedValue = a;
        })

         return asyncAssert(() => {
            expect(returnedValue).toEqual(value);
        });

    })
})