const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')
const { interface, bytecode } = require('./compile') 
const provider = new HDWalletProvider(
    'call grow acoustic vintage front ring trade assist shuffle minic volume reject',
    'https://rinkeby.infura.io'
)
const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts()
    console.log('Attempting to deploy from account ' + accounts[0])
    await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there']})
    .send({gas: '1000000', from: accounts[0]})

    console.log('Contract deployed successfully', result.options.address)
}

deploy()