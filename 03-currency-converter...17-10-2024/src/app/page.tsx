'use client';
import InputBox from "@/components/InputBox";
import useCurrencyInfo from "@/hooks/useCurrencyInfo"
import { SetStateAction, useState } from "react";


export default function Home() {

  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState("pkr")
  const [to, setTo] = useState("usd")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo:any = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }
 

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('https://media.licdn.com/dms/image/v2/D4D12AQHHxHZlR-3ZGg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1725859310321?e=1735171200&v=beta&t=Jx9i4EPGSwELTDHziPuj47u4A-MhdHlW0xa8nh6v17I')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                         
                      }}
                  >
                      {/* <div className="w-full mb-1">
                          { <InputBox
                              label="From"
                              amount={amount}
                              currencyOptions={options}
                              onCurrencyChange={(currency)=>setAmount(amount)}
                              selectCurrency={from}
                          /> 
                          }
                      </div> */}
                       <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onAmountChange={(newAmount) => setAmount(newAmount)}
                onCurrencyChange={(currency: string) => setFrom(currency)}
                selectCurrency={from}
                amountDisable={false}
                currencyDisable={false}
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
                      {/* <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              currencyOptions={options}
                              onCurrencyChange={(currency)=>setTo(currency)}
                              selectCurrency={from}
                              amountDisable
                          />
                      </div> */}
                       <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onAmountChange={() => {}}
                onCurrencyChange={(currency: SetStateAction<string>) =>
                  setTo(currency)
                }
                selectCurrency={to}
                amountDisable={true}
                currencyDisable={false}
              />
            </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}
