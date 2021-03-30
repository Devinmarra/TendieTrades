export const currency = (value: number, locale = "en-US", style = "currency", currencyType = "USD") => {
    return new Intl.NumberFormat(locale, { style, currency: currencyType }).format(value);
};
