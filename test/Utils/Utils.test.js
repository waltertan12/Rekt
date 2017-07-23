import { isObject, isPrimitive } from '../../src/Utils/Utils';

test('isObject should return true if the argument is an Object', () => {
    expect(isObject({})).toEqual(true);
});

test('isObject should return false if the argument is an Array', () => {
    expect(isObject([])).toEqual(false);
});

test('isObject should return false if the argument is a Function', () => {
    expect(isObject(() => {})).toEqual(false);
});

test('isObject should return false if the argument is a number or string', () => {
    expect(isObject(2)).toEqual(false);
    expect(isObject(2.234)).toEqual(false);
    expect(isObject('hello')).toEqual(false);
    expect(isObject('')).toEqual(false);
});

test('isPrimitive should return true if the argument is a number or string', () => {
    expect(isPrimitive(2)).toEqual(true);
    expect(isPrimitive(2.234)).toEqual(true);
    expect(isPrimitive('hello')).toEqual(true);
    expect(isPrimitive('')).toEqual(true);
});

test('isPrimitive should return false if the argument is an Object', () => {
    expect(isPrimitive({})).toEqual(false);
});

test('isPrimitive should return false if the argument is an Function', () => {
    expect(isPrimitive(() => {})).toEqual(false);
});
