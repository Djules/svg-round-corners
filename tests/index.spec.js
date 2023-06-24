import {
  parsePath,
  roundCorners,
  roundCommands,
} from '../lib/index.js';

import cloneDeep from 'lodash.clonedeep';

import * as v from './variables';

describe('index', () => {
  it('parsePath(): It should parse the square', function () {
    const c = cloneDeep(v.squareCommands);
    expect(parsePath(v.rawRelativeSquare)).toEqual(c);
  });

  it('roundCommands(): it should add arcs between corners', () => {
    const c = cloneDeep(v.squareCommands);
    const r = cloneDeep(v.roundedSquareCmds);
    expect(roundCommands(c, 10)).toEqual(r);
  });

  it('roundCorners(): it should parse "d" string and add rounded corners', () => {
    expect(roundCorners(v.rawRelativeSquare, 20).path).toBe(v.computedSquare);
    expect(roundCorners(v.rawSegments, 20).path).toBe(v.roundedSegments);
  });
});