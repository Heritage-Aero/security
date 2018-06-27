import assertRevert, { assertError } from '../helpers/assertRevert'
import { increaseTimeTo, duration } from '../helpers/increaseTime';

const BigNumber = web3.BigNumber

const FunctionTypes = artifacts.require('FunctionTypes')

require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should()

const expect = require('chai').expect

contract('FunctionTypes Test', accounts => {
  const [creator, user, anotherUser, operator, mallory] = accounts
  const oneEther = 10e18;
  let fTypes = null

  beforeEach(async () => {
    fTypes = await FunctionTypes.new({value: 10e17});
  })

  describe('Contract', () => {
    it('Exists', async () => {
      fTypes.breakIt({value: 1});
    })
  })
})

