


import React, {useId} from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisplay = false,
  currencyDisplay = false,

  className = "",
}) {
    const amountInputId = useId()

  return (
     <div
      className={`bg-gradient-to-r from-white to-gray-50 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl p-5 flex items-center justify-between ${className}`}
    >
      {/* ---------- Left Section (Amount Input) ---------- */}
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-gray-500 text-sm mb-2 inline-block font-medium tracking-wide"
        >
          {label}
        </label>

        <input
          id={amountInputId}
          type="number"
          placeholder="Enter amount"
          disabled={amountDisplay}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className={`w-full bg-white/80 backdrop-blur-md border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 outline-none rounded-xl py-2 px-3 text-gray-800 text-base font-medium transition-all duration-200 ${
            amountDisplay ? "cursor-not-allowed opacity-70" : ""
          }`}
        />
      </div>

      {/* ---------- Right Section (Currency Dropdown) ---------- */}
      <div className="w-1/2 flex flex-col items-end">
        <p className="text-gray-500 text-sm mb-2 font-medium tracking-wide">
          Currency Type
        </p>

        <select
          disabled={currencyDisplay}
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          className={`rounded-xl border border-gray-200 bg-white/90 backdrop-blur-md py-2 px-3 text-gray-800 font-medium shadow-sm hover:shadow-md focus:ring-2 focus:ring-blue-300 focus:border-blue-400 cursor-pointer transition-all duration-200 ${
            currencyDisplay ? "cursor-not-allowed opacity-70" : ""
          }`}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;