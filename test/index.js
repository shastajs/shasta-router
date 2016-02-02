/*global it: true, describe: true */
/*eslint no-console: 0*/

import should from 'should'
import router from '../src'

describe('shasta-router', () => {
  it('should exist', (done) => {
    should.exist(router)
    done()
  })
})
