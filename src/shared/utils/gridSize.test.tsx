import { describe, expect, it } from "vitest"
import { calculateGridColumnByItemsNumber, maxGridColumnSize } from "./gridSize"

describe("grid size", () => {
  it("should return default grid size number when items element are lesser than max grid size", () => {
    expect(calculateGridColumnByItemsNumber(1)).toStrictEqual(maxGridColumnSize)
    expect(calculateGridColumnByItemsNumber(2)).toStrictEqual(maxGridColumnSize)
    expect(calculateGridColumnByItemsNumber(3)).toStrictEqual(maxGridColumnSize)
    expect(calculateGridColumnByItemsNumber(4)).toStrictEqual(maxGridColumnSize)
  })
  it("should return default grid size number when items element are multiple of max grid size", () => {
    expect(calculateGridColumnByItemsNumber(5)).toStrictEqual(maxGridColumnSize)
    expect(calculateGridColumnByItemsNumber(10)).toStrictEqual(maxGridColumnSize)
    expect(calculateGridColumnByItemsNumber(15)).toStrictEqual(maxGridColumnSize)
    expect(calculateGridColumnByItemsNumber(20)).toStrictEqual(maxGridColumnSize)
  })
  it("should return variable grid size number when items element are greater than max grid size", () => {
    expect(calculateGridColumnByItemsNumber(6)).toStrictEqual(3)
    expect(calculateGridColumnByItemsNumber(7)).toStrictEqual(4)
    expect(calculateGridColumnByItemsNumber(8)).toStrictEqual(4)
    expect(calculateGridColumnByItemsNumber(9)).toStrictEqual(5)
    expect(calculateGridColumnByItemsNumber(11)).toStrictEqual(4)
    expect(calculateGridColumnByItemsNumber(12)).toStrictEqual(4)
    expect(calculateGridColumnByItemsNumber(13)).toStrictEqual(5)
    expect(calculateGridColumnByItemsNumber(14)).toStrictEqual(5)
    expect(calculateGridColumnByItemsNumber(16)).toStrictEqual(4)
    expect(calculateGridColumnByItemsNumber(17)).toStrictEqual(5)
    expect(calculateGridColumnByItemsNumber(18)).toStrictEqual(5)
    expect(calculateGridColumnByItemsNumber(19)).toStrictEqual(5)
  })
})
