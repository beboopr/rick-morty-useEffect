import {useState, useEffect} from 'react'
import getPortlaGun from './Birdperson'
import './App.css';

function App() {
  const [data, setData] = useEffect(({ name: "Rick Sanchez", origin: 'Earth C137' , type: 'Human' ;}))
  
  useEffect(() => {
    getPortlaGun()
  }, [])
  
  const getPortlaGun = () => {
    fetch(`https://api.sampleapis.com/rickandmorty/characters`)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(me => console.error(me))
  }
  
  console.log('my data' ,data)
  
  return (
    <div className='App'>
      <main>
      <h1>Rcik and Morty API</h1>
      <button onClick={() => getPortlaGun()}>Get Portal</button>
      <div className='character_items'>
        {data.map (item => {
          console.log('each item', item)
          return <Birdperson entireObject={item} />
        })}
  </div>
  </main>
  </div>
  )
  export default App;