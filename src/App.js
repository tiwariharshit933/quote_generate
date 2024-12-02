import { useState, useEffect } from "react";


function App() {
  let api = `${process.env.API_key}`;

  const [quote, setQuote] = useState('');

  async function apiFun() {
    try {
      let response = await fetch(api);
      let res = await response.json()
      if (!response.ok) {
        throw new Error(setQuote("Due to network issue quotes are not available."));
      }
      setQuote(res.slip.advice);

    } catch (e) {
      console.log(e);
      setQuote("Due to network issue quotes are not available.")
    }
  }

  useEffect(() => {
    apiFun()
  })

  return (
    <>
      <div className="quoteMain">
        <div className="quoteInner">
          <p>{quote}</p>
          <button type="button" className="btn" onClick={() => apiFun()}>Generate</button>
        </div>
      </div>
    </>
  );
}

export default App;
