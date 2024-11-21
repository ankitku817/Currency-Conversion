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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div
      className="w-full h-screen flex bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      
      <div className="w-1/3 h-full bg-gray-900 text-white flex items-center justify-center">
        <Footer />
      </div>

      
      <div className="w-2/3 h-full flex items-center justify-center">
        <div className="max-w-fit">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md text-white px-2 py-0.5"
                  onClick={swap}
                >
                  🔄
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                onClick={convert}
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
