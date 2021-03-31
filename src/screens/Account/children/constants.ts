export interface AccountField {
    key: string;
    title: string;
    type: string;
}
export const fields: AccountField[] = [
    { key: "id", title: "ID", type: "string" },
    { key: "account_number", title: "Account Number", type: "string" },
    { key: "status", title: "Status", type: "string" },
    { key: "currency", title: "Currency", type: "string" },
    { key: "buying_power", title: "Buying Power", type: "currency" },
    { key: "regt_buying_power", title: "REGT Buying Power(?)", type: "currency" },
    { key: "daytrading_buying_power", title: "Day Trading Buying Power", type: "currency" },
    { key: "cash", title: "Cash", type: "currency" },
    { key: "portfolio_value", title: "Portfolio Value", type: "currency" },
    { key: "pattern_day_trader", title: "Pattern Day Trader", type: "boolean" },
    { key: "trading_blocked", title: "Trading Blocked", type: "boolean" },
    { key: "transfers_blocked", title: "Transfers Blocked", type: "boolean" },
    { key: "account_blocked", title: "Account Blocked", type: "boolean" },
    { key: "created_at", title: "Created At", type: "string" },
    { key: "trade_suspended_by_user", title: "Trade Suspended By Value", type: "boolean" },
    { key: "multiplier", title: "Multiplier", type: "string" },
    { key: "shorting_enabled", title: "Shorting Enabled", type: "boolean" },
    { key: "equity", title: "Equity", type: "currency" },
    { key: "last_equity", title: "Last Equity", type: "currency" },
    { key: "long_market_value", title: "Long Market Value", type: "currency" },
    { key: "short_market_value", title: "Short Market Value", type: "currency" },
    { key: "initial_margin", title: "Initial Margin", type: "currency" },
    { key: "maintenance_margin", title: "Maintenance Margin", type: "currency" },
    { key: "last_maintenance_margin", title: "Last Maintenance Margin", type: "currency" },
    { key: "sma", title: "SMA", type: "string" },
    { key: "daytrade_count", title: "Day Trade Count", type: "number" },
];
