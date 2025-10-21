import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  };

  return (
    <>
      <div className="w-full h-screen flex">
        {/* Left side - Image */}
        <div
          className="flex-1 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/16104785/pexels-photo-16104785.jpeg')`,
          }}
        ></div>

        {/* Right side - Converter */}
        <div
          className="flex-1 flex justify-center items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/29751494/pexels-photo-29751494.jpeg')`,
          }}
        >
          <div className="w-full max-w-md mx-auto rounded-2xl border border-white/30 bg-white/10 backdrop-blur-lg shadow-2xl p-8">
            <h1 className="text-center text-3xl font-bold text-white mb-6 drop-shadow-md tracking-wide">
              💱 Currency Converter
            </h1>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-4">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>

              <div className="relative w-full h-0.5 my-5">
                <button
                  type="button"
                  onClick={swap}
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
                >
                  🔄 Swap
                </button>
              </div>

              <div className="w-full mb-6">
                <InputBox
                  label="To"
                  amount={convertedAmount === 0 ? "" : convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold shadow-lg hover:scale-[1.02] hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
              >
                Convert {from.toUpperCase()} → {to.toUpperCase()}
              </button>
            </form>

            <p className="text-center text-white/70 text-sm mt-4">
              Made with ❤️ using React + Tailwind
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
