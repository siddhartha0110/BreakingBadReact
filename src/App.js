import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/ui/Header';
import Character from './components/characters/Character';
import Search from './components/ui/Search';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios("https://www.breakingbadapi.com/api/characters")
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
      <Search />
      <Character isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
