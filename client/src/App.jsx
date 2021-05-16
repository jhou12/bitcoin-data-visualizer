import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2';
import {updateSettings} from './settings.js';

const App = () => {
  const [settings, setSettings] = useState([])
  useEffect(() => {
    axios('/btc')
    .then(res => {
      console.log('res.data', res.data)
      const update = updateSettings(res.data)
      setSettings(update)
    })
  }, [])
  return (
    <div>
      <Line data={settings} className="test"/>
      <a href="https://www.coindesk.com/price/bitcoin">
        <center>Powered by CoinDesk</center>
        </a>
    </div>
  )
}

export default App;