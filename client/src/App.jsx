import { useState, useEffect } from 'react'

import './App.scss';
import Login from './pages/Login'

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, [])


  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/");
      const resData = await response.text();
      setData(resData);
      console.log(resData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return (
    <>
      <Login />
      {data}

    </>
  )
}

export default App
