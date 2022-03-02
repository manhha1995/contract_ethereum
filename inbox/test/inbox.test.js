const mocha = require('mocha')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())
let accounts
beforeEach(async() => {
  accounts = await web3.eth.getAccounts()
  .then(fetchAccounts => {
    console.log(fetchAccounts)
  }).catch((err) => {
    console.log(err);
  });
})

describe('Inbox', () => { 
  it('it will deploy a contract', () => {
    console.log(accounts)
  })
 })
