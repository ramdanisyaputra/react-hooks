import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [angka, setAngka] = useState(0)
  const [text, setText] = useState("")
  const [arr, setArr] = useState([
    {
      id: 1,
      title: "this is title"
    }
  ])

  const [obj, setObj] = useState({
    name: "ramsjr"
  })

  const add = () => {
    setAngka(angka + 1)
  }
  
  const kurang = () => {
    setAngka(angka - 1)
  }

  return (
    <div>
      {angka}
      <button onClick={add}>Tambah</button>
      <button onClick={kurang}>Kurang</button>
    </div>
  );
}

export default App;
