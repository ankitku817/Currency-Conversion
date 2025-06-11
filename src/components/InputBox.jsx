import React, { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId();

    return (
        <div className={`bg-white/80 p-3 rounded-lg text-sm flex flex-col sm:flex-row gap-4 ${className}`}>
            <div className="flex-1">
                <label htmlFor={amountInputId} className="text-black/60 mb-1 block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-white py-2 px-3 rounded border border-gray-300"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>

            <div className="flex-1">
                <label className="text-black/60 mb-1 block">Currency Type</label>
                <select
                    className="w-full bg-white py-2 px-3 rounded border border-gray-300"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
