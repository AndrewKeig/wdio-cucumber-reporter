import sinon from 'sinon'
import events from 'events'
import CucumberReporter from '../lib/reporter'

class BaseReporter extends events.EventEmitter {
    get color () {
        return 'some color'
    }
}

var baseReporterMock = new BaseReporter()
var reporter
var printLineMock

describe('cucumber reporter', () => {
    beforeEach(() => {
        printLineMock = sinon.spy()
        baseReporterMock.printLine = printLineMock
        reporter = new CucumberReporter(baseReporterMock)
    })

    it('should print title when testrun starts', () => {
        reporter.printLine = sinon.spy()
        reporter.emit('suite:start', { title: 'test' })
        reporter.printLine.calledWith('suite').should.be.true
    })

    it('should print pending spec for pending events', () => {
        reporter.printLine = sinon.spy()
        reporter.emit('test:pending', { title: 'test' })
        reporter.printLine.calledWith('pending').should.be.true
    })

    it('should print pass spec for passing events', () => {
        reporter.printLine = sinon.spy()
        reporter.emit('test:pass', { title: 'test' })
        reporter.printLine.calledWith('green').should.be.true
    })

    it('should print fail spec for failing events', () => {
        reporter.printLine = sinon.spy()
        reporter.emit('test:fail', { title: 'test', err: { message: 'err', stack: 'err'} })
        reporter.printLine.calledWith('fail').should.be.true
    })

    it('should print custom epilogue when test ends', () => {
        reporter.printEpilogueEnd = sinon.spy()
        reporter.emit('test:end')
        reporter.printEpilogueEnd.calledWith(null).should.be.true
    })

    it('printLine should return nothing if status or line is falsy', () => {
        (reporter.printLine() === undefined).should.be.true
        (reporter.printLine('status') === undefined).should.be.true
    })
})
