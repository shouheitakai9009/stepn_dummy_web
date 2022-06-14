// @ts-ignore
import Web3 from 'web3/dist/web3.min.js'
import IWeb3 from 'web3'
import { AbiItem } from 'web3-utils';
import ABI from '../json/StepnDummy.json'

export const getContract = async () => {
  const web3 = initializedWeb3()
  const [address, abi]: [string, AbiItem] = ["0x085b2f9b2175Ce0da9a77a2AaF89d3AB750CEBf4", (ABI.abi as unknown as AbiItem)]
  const contract = new web3.eth.Contract(abi, address)
  return contract
}

export const getAccounts = async () => {
  const web3 = initializedWeb3()
  return await web3.eth.getAccounts()
}

export const getGasPrise = async () => {
  const web3 = initializedWeb3()
  const gasPrice = await web3.eth.getGasPrice((error, result) => {
    if (error) return
    return web3.utils.fromWei(result, "gwei")
  })
  return gasPrice
}

const initializedWeb3 = (): IWeb3 => {
  const web3: IWeb3 = new Web3(new Web3.providers.HttpProvider("http://192.168.3.3:7545"))
  return web3
}

export default Web3
