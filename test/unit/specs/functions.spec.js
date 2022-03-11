import * as fn from '@/utilities/functions';

// paddingNumber
describe('Padding numbers', () => {
    it('Should throw error if no arguments have passed', () => {
        expect(() => fn.paddingNumber()).toThrow();
    });
    it('padding zero', () => {
        expect(fn.paddingNumber(0)).toEqual('00');
    });
    it('padding one digit number', () => {
        expect(fn.paddingNumber(5)).toEqual('05');
    });
    it('padding two digits number', () => {
        expect(fn.paddingNumber(15)).toEqual('15');
    });
});