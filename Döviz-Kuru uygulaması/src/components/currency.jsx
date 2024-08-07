import React, { useState } from "react"
import axios from "axios"
let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
let API_KEY = "fca_live_0OEQWUWDZux5JiYQ9e4h6IUkBLjSSgdX00fDnBYJ"

function Currency() {
    const [amount, setAmount] = useState();
    const [froMcurrency, setFromcurrency] = useState("USD");
    const [toCurrency, setTocurrency] = useState("TRY");
    const [result, setResult] = useState(0);



    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${froMcurrency}`);
        setResult((response.data.data[toCurrency] * amount).toFixed(2))
    }
    return (
        <div className='currency-div'>
            <div>
                <h3 className='title' style={{ marginTop: "-20px", backgroundColor: "lightcyan" }}>DÖVİZ KURU UYGULAMASI</h3>
            </div>
            <div style={{ marginTop: "20px" }}>
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number" className='amount' placeholder='Miktar' />

                <select
                    onChange={(e) => setFromcurrency(e.target.value)}
                    className='from-currency-option'>
                    <option>USD</option>
                    <option>EURO</option>
                    <option>TRY</option>
                </select>

                <i className="fa-solid fa-arrow-right" style={{ fontSize: "20px" }}></i>

                <select
                    onChange={(e) => setTocurrency(e.target.value)}
                    className='to-currency-option'>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EURO</option>
                </select>
                <input
                    value={result}
                    onChange={(e) => setResult(e.target.value)}
                    type="number" className='result' placeholder='Sonuç' />

            </div>
            <div>
                <button
                    onClick={exchange}
                    style={{ width: "100px", height: "30px", marginTop: "20px", cursor: 'pointer', backgroundColor: "red", borderRadius: "5px", border: "none" }}>Çevir</button>
            </div>

        </div>

    )
}

export default Currency;
