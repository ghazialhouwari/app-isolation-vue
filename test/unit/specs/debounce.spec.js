import * as fn from '@/utilities/functions';
import * as sinon from 'sinon';


let clock;
beforeEach(() => {
    clock = sinon.useFakeTimers();
});
afterEach(() => {
    clock.restore();
});
test('Debounce', () => {
    const func = jest.fn();
    const debouncedFunc = fn.debounce(func, 1000);

    // Call it immediately
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(0); // func not called

    // Call it several times with 500ms between each call
    for(let i = 0; i < 10; i++) {
        clock.tick(500);
        debouncedFunc();
    }
    expect(func).toHaveBeenCalledTimes(0); // func not called

    // wait 1000ms
    clock.tick(1000);
    expect(func).toHaveBeenCalledTimes(1);  // func called
});