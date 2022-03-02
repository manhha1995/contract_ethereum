const mocha = require('mocha')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())
const { interface, bytecode } = require('../compile')
let accounts
beforeEach(async() => {
  accounts = await web3.eth.getAccounts()
  
  new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there'] })
    .send({ from: account[0], gas: '100000' })
})

describe('Inbox', () => { 
  it('it will deploy a contract', () => {
    console.log(accounts)
  })
 })
