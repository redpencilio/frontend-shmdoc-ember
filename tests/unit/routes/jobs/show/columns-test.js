import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | jobs/show/columns', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:jobs/show/columns');
    assert.ok(route);
  });
});
