import React, { useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
// @ts-ignore
import Web3 from 'web3/dist/web3.min.js'
import IWeb3 from 'web3'
import { AbiItem } from 'web3-utils';
import ABI from './json/SneakerFactory.json'
import "./styles/App.scss";

import { Home } from './components/pages'
import { Sneakers } from './components/pages/sneakers'

const App = () => {

  // const initialize = async () => {
  //   const web3: IWeb3 = new Web3(new Web3.providers.HttpProvider("http://192.168.3.3:7545"))
  //   const accounts = await web3.eth.getAccounts()

  //   const [address, abi]: [string, AbiItem] = ["0x67D3b8683F9F217AC617bb9448552833dea6505c", (ABI.abi as unknown as AbiItem)]
  //   const contract = new web3.eth.Contract(abi, address)

  //   const gasPrice = await web3.eth.getGasPrice((error, result) => {
  //     if (error) return
  //     return web3.utils.fromWei(result, "gwei")
  //   })

  //   const result = await contract.methods.createSneaker(0, 0).send({ from: accounts[0], gas: 500000, gasPrice: gasPrice })
  //   console.log(result)

  //   const ownerSneakers = await contract.methods.getOwnerToSneakers().call({ from: accounts[0] })
  //   console.log(ownerSneakers)
  // }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sneakers" element={<Sneakers />} />
      </Routes>
    </div>
  );
}

export default App;
