import React, { useId } from "react";
import '../App.css'
function Input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency,
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const amountId = useId();

  return (
    <div id="App" className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2 ">
        <label htmlFor={amountId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amountDisabled}
          onChange={(e)=> onAmountChange?.(e.target.value)}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e)=> onCurrencyChange?. (e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
