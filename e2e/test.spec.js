const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect
const should = chai.should

describe('test suit', () => {
  it('console.log', () => {
    browser.get('http://localhost:5050/')
    const elementh1 = element(by.css('h1'))
    const elementh2 = element(by.css('h2'))
    
    return elementh1.getText().then(arg => console.log(arg)).then(() => elementh2.getText().then(arg => console.log(arg)))
   
  })
})


