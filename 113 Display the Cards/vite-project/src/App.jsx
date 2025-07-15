import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  //usestatesnippet
  const [cards, setCards] = useState([])

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCards(data)
    console.log(data)
  }

  //useEffectSnippet
  useEffect(() => {
    fetchData()


  }, [])



  return (
    <>
    <Navbar/>
      <div className="container">
        {cards.map((card) => {
          return <div key={card.id} className="card">
            <h1>{card.title}</h1>
            <p>{card.body}</p>
            <span>By:UserId:{card.userID}</span>
          </div>
        })}

      </div>


    </>
  )
}

export default App
