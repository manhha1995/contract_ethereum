const mocha = require('mocha')
const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())
const { interface, bytecode } = require('../compile')
let accounts, inbox
beforeEach(async() => {
  accounts = await web3.eth.getAccounts()
  
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode,
             arguments: ['Hi there'] })
    .send({ from: account[0], gas: '100000' })
})

describe('Inbox', () => { 
  it('it will deploy a contract', () => {
    assert.ok(inbox.options.address)
  })

  it('has a default address', async () => {
    const message = await inbox.methods.message().call()
    assert.equal(message, 'Hi there')
  })

  it('can change the message', async () => {
    inbox.methods.setMessage('bye').send({ from: accounts[0] })
    const message = await inbox.methods.message().call()
    assert.equal(message, 'bye')
  })
 })

 afterEach(async () => {
  accounts = await web3.eth.setAccounts()
 })
