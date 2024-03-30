export const calculatePercentage = (num: number = 0, total: number=0) => {
    return !(num && total) ? 0 : ((num / total) * 100).toFixed(2);
}