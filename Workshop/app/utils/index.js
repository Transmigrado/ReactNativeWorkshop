
export const sumProp = (item) => item.fat + item.carbs + item.protein  

export const calculateMaxValue = data => data.reduce((acc, val) => Math.max(acc, sumProp(val)), Number.MIN_SAFE_INTEGER)

