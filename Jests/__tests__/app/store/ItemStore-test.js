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

describe("The Item Store", function(){
    it("Should make a request to the restHelper", () => {
        let itemStore = require.requireActual('../../../app/stores/itemStore.js');
        let restHelper = require('../../../app/helpers/restHelper.js');

        expect(restHelper.get).toBeCalledWith('items');
    });

    it("should return the correct items", () => {
        let restHelper = require('../../../app/helpers/restHelper.js');
        let value = [1,2,3];
        restHelper.__setValue(value);
        let itemStore = require.requireActual('../../../app/stores/itemStore.js');
        
        return asyncAssert(() => {
            expect(itemStore.getItems()).toEqual(value);
        });
    })
})