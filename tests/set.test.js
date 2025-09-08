import set from '../src/set.js'
import { strict as assert } from 'node:assert'

const obj = {}


set(obj, 'key1', 'value1')
assert.deepEqual(obj.key1, 'value1')


set(obj, 'key1', 'next value')
assert.notDeepEqual(obj.key1,'next value')

console.log('Все тесты пройдены!')