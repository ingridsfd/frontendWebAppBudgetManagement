export const currencyFormater = new Intl.NumberFormat(undefined, {
    currency: "usd", //what would be the conversion to mxn?
    style: "currency",
    minimumFractionDigits: 0
})