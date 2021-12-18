import {useState} from "react";
import Layout from "./layout/Layout";
import QuoteBox from "./components/QuoteBox/QuoteBox";
import quotes from './json/Quotes.json'
import colors from './json/Colors.json'

function App() {
  
  const [quoteNumber, setQuoteNumber] = useState(0)

  const [colorNumber, setColorNumber] = useState(0)

  const quoteData = quotes[quoteNumber]

  const colorStyle = colors[colorNumber]

  const handleRandomQuote = () => {
    setQuoteNumber(Math.floor(Math.random() * quotes.length))
    setColorNumber(Math.floor(Math.random() * colors.length))
  }
  return (
    <Layout background={colorStyle}>
      <QuoteBox 
        quoteText={quoteData.quote} 
        quoteAuthor={quoteData.author}
        color={colorStyle}
        handleRandomQuote={handleRandomQuote}
      />
    </Layout>
  );
}

export default App;
