import { useState, useEffect } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrency';
import Footer from './components/footer';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { data: currencyInfo, loading, error } = useCurrencyInfo();

  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const convert = () => {
    if (currencyInfo && currencyInfo[from] && currencyInfo[to]) {
      setConvertedAmount((amount * currencyInfo[to]) / currencyInfo[from]);
    }
  };

  useEffect(() => {
    convert();
  }, [amount, from, to]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  if (loading) return <div className="text-center p-10 text-white">Loading...</div>;
  if (error) return <div className="text-center p-10 text-red-500">Error: {error}</div>;

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full md:w-1/3 bg-gray-900 text-white">
        <Footer />
      </div>

      <div className="w-full md:w-2/3 flex items-center justify-center py-6 px-4">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) => e.preventDefault()}>
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />

            <div className="relative my-2 text-center">
              <button
                type="button"
                className="rounded-full bg-blue-600 text-white px-4 py-2"
                onClick={swap}
              >
                🔄 Swap
              </button>
            </div>

            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />

            <button
              type="submit"
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-lg font-medium"
              onClick={convert}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
