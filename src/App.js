import React from 'react';
import './App.css';
import Quotes from './Quotes.js'
import Writer from './Writer.js'
import Navbar from './Navbar';

function App() {
  const [genQuote, setGenQuote] = React.useState([])

  React.useEffect(function newData() {
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then(response => response.json())
      .then(data => setGenQuote(data.data.map(alllist => {
        return {
          quotes: alllist.quoteText,
          author: alllist.quoteAuthor,
          genre: alllist.quoteGenre
        }
      })))}, [])
      // .then(data => console.log(data.data[0].quoteAuthor))}, [])

  const quoteData = genQuote.map(generateQuote => {
    return (
      <Quotes 
        quotes={`"${generateQuote.quotes}"`}
      />
    )
  })

  const quoteDataWriter = genQuote.map(generateQuote => {
    return (
      <Writer 
        author={generateQuote.author}
        genre={generateQuote.genre}
      />
    )
  })

  function handleClick() {
    return window.location.reload()
  }

  return (
    <div>
      <Navbar handleClick={handleClick} />
      <div className="App">
        {quoteData}
        {quoteDataWriter}
      </div>
    </div>
  );
}

export default App;
