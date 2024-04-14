import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [selectedValue, setSelectedValue] = useState({
    fromCurrency: "usd",
    toCurrency: "inr",
  });
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <div  className=" w-full h-screen flex flex-wrap justify-center  items-center "   >
      <div className="w-full ">
        <div className="w-full  max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full mb-1">
              <Input
                label="From"
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
                onCurrencyChange={(currency) => setFrom(currency)}
                currencyOptions={currencyOptions}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input
                label="To"
                amount={convertedAmount}
                onAmountChange={(amount) => setConvertedAmount(amount)}
                selectCurrency={to}
                onCurrencyChange={(currency) => setTo(currency)}
                currencyOptions={currencyOptions}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={convert}
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
