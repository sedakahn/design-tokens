import { getStandardTransformer } from '../../src/transformer/standardTransformer'
import { extractedFigmaTokens } from './data/extractedFigmaTokens.data'
import { transformedStandardTokens } from './data/transformedStandardTokens.data'
import { formatKeysType } from '../../src/config/format'

const w3cFormatKeys: formatKeysType = {
  VALUE: '$value',
  DESCRIPTION: '$description',
  TYPE: '$type',
  EXTENSIONS: '$extensions',
  NAME: 'name'
}

describe('w3c draft standard Transfomer', () => {
  const transformer = getStandardTransformer(w3cFormatKeys)
  //
  test('size token', () => expect(transformer(extractedFigmaTokens.size)).toStrictEqual(transformedStandardTokens.size))
  test('breakpoint token', () => expect(transformer(extractedFigmaTokens.breakpoint)).toStrictEqual(transformedStandardTokens.breakpoint))
  test('spacing token', () => expect(transformer(extractedFigmaTokens.spacing)).toStrictEqual(transformedStandardTokens.spacing))
  test('radius mixed token', () => expect(transformer(extractedFigmaTokens.radiusMixed)).toStrictEqual(transformedStandardTokens.radiusMixed))
  test('radius single token', () => expect(transformer(extractedFigmaTokens.radiusSingle)).toStrictEqual(transformedStandardTokens.radiusSingle))
  test('grid token', () => expect(transformer(extractedFigmaTokens.grid)).toStrictEqual(transformedStandardTokens.grid))
  test('multi grid token', () => expect(transformer(extractedFigmaTokens.multiGrid)).toStrictEqual(transformedStandardTokens.multiGrid))
  test('font token', () => expect(transformer(extractedFigmaTokens.font)).toStrictEqual(transformedStandardTokens.font))
  test('typography token', () => expect(transformer(extractedFigmaTokens.typography)).toStrictEqual(transformedStandardTokens.typography))
  test('font with lineheight percent', () => expect(transformer(extractedFigmaTokens.fontLhPercent)).toStrictEqual(transformedStandardTokens.fontLhPercent))
  test('color token', () => expect(transformer(extractedFigmaTokens.color)).toStrictEqual(transformedStandardTokens.color))
  test('alias color token', () => expect(transformer(extractedFigmaTokens.aliasColor)).toStrictEqual(transformedStandardTokens.aliasColor))
  test('multi color token', () => expect(transformer(extractedFigmaTokens.multiColor)).toStrictEqual(transformedStandardTokens.multiColor))
  test('gradient token', () => expect(transformer(extractedFigmaTokens.gradient)).toStrictEqual(transformedStandardTokens.gradient))
  test('color and gradient token', () => expect(transformer(extractedFigmaTokens.colorAndGradient)).toStrictEqual(transformedStandardTokens.colorAndGradient))
  test('gradient and color', () => expect(transformer(extractedFigmaTokens.gradientAndColor)).toStrictEqual(transformedStandardTokens.gradientAndColor))
  test('border token', () => expect(transformer(extractedFigmaTokens.border)).toStrictEqual(transformedStandardTokens.border))
  test('effect token', () => expect(transformer(extractedFigmaTokens.effect)).toStrictEqual(transformedStandardTokens.effect))
  test('blur effect token', () => expect(transformer(extractedFigmaTokens.blurEffect)).toStrictEqual(transformedStandardTokens.blurEffect))
  test('multi effect token', () => expect(transformer(extractedFigmaTokens.multiEffect)).toStrictEqual(transformedStandardTokens.multiEffect))
  test('motion token', () => expect(transformer(extractedFigmaTokens.motion)).toStrictEqual(transformedStandardTokens.motion))
  test('motion token', () => expect(transformer(extractedFigmaTokens.springMotion)).toStrictEqual(transformedStandardTokens.springMotion))
  test('opacity token', () => expect(transformer(extractedFigmaTokens.opacity)).toStrictEqual(transformedStandardTokens.opacity))
})
