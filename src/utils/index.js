export const getPriceFormatted = (amount) => {
    return `$ ${new Intl.NumberFormat().format(amount).replace(',','.')}`;
}