import { sum } from "../sum";

test('Sum check', () => { 
    const result = sum(3,7);

    expect(result).toBe(10);
 })