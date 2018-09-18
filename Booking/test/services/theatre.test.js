const assert = require('assert');
const app = require('../../src/app');

describe('\'theatre\' service', () => {
  it('registered the service', () => {
    const service = app.service('theatre');

    assert.ok(service, 'Registered the service');
  });
});
