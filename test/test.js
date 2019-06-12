const assert = require('assert')
const messageReceived = require('../received/messageReceiced')

describe('testing response for incoming messanger text', () => {
    it('should return hi response', () => {
        messageReceived(null, 'hi', response => {
            assert.equal(response, "Hi, please type your first name")
        })
    })

    it('should return for name response message', () => {
        messageReceived(null, 'akbar', response => {
            assert.equal(response, "please tell your brith day in MM/DD/YYYY format")
        })
    })

    it('should return for birthday response message', () => {
        messageReceived(null, '10/06/1997', response => {
            assert.equal(response, "Sending Button")
        })
    })

    it('should return for counting birthday response message', () => {
        messageReceived(null, 'yes', response => {
            assert.equal(typeof response, 'string')
        })
    })

    it('should return for goodbay response message', () => {
        messageReceived(null, 'no', response => {
            assert.equal(response, "Goodbay 👋")
        })
    })
})