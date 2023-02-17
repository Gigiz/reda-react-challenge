export const maxGridColumnSize = 5

export const calculateGridColumnByItemsNumber = (itemsNumber: number) => {
  if (itemsNumber <= maxGridColumnSize || itemsNumber % maxGridColumnSize === 0) {
    return maxGridColumnSize
  }

  const maxDelta = Math.round(itemsNumber / maxGridColumnSize)
  const maxGridSize = maxDelta + ((itemsNumber - maxDelta) % (maxGridColumnSize - 1))

  if (maxGridSize % (maxGridColumnSize - 1) === 0) {
    return (maxGridColumnSize - 1)
  }

  if (maxGridSize >= maxGridColumnSize) {
    return maxGridColumnSize
  }

  return maxGridSize + 1
}