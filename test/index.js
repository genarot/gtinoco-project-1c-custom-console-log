const log = require('./../index');
const chai = require('chai');
const sinonChai = require('sinon-chai')
const sinon = require('sinon')
chai.use(sinonChai)
const {expect} = chai

describe('Tests of the Functions', () => {
    const MESSAGE = 'Hello, I\'m a greeting!';
    beforeEach(() => {
        sinon.spy(console,'log')
    })

    afterEach(() => {
        console.log.restore();
    })

    it('ok Function', () => {
        log.ok(MESSAGE)
        expect(console.log).to.be.called;  
    })

    it('info Function', () => {
        log.info(MESSAGE)
        expect(console.log).to.be.called;
        expect(console.log).to.have.callCount(1);
    })

    it('warning Function', () => {
        log.warning(MESSAGE)
        expect(console.log).to.be.called;
    })

    it('error Function', () => {
        log.error(MESSAGE)
        expect(console.log).to.be.called;
    })

    it('Did not calll console log',() => {
        log.placeHolderMessage();
        expect(console.log).to.be.not.called;
    })
})