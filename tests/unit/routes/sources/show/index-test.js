import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | sources/show/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:sources/show/index');
    assert.ok(route);
  });
});
