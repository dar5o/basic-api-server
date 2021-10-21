'use strict';

const validator = require('../src/middleware/validator');

describe('Given logger', () => {
  describe('When called', () => {
    it('passes to next the function', async () => {
      let requestObject = {
        param: {
          id: 1
        }
      }
      let responseObject = {};
      let nextFunction = jest.fn();
    
      validator(requestObject, responseObject, nextFunction);
      expect(nextFunction).toHaveBeenCalled();
    });

    it('can throw an error', () => {
      let requestObject = {
        param: {}
      }
      let responseObject = {};
      let nextFunction = jest.fn();

      expect(() => validator(requestObject, responseObject, nextFunction)).toThrow(Error);
      expect(() => validator(requestObject, responseObject, nextFunction)).toThrow("ID Not Provided");
    });
  });
});
