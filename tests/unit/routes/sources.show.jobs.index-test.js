import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | sources.show.jobs.index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:sources.show.jobs.index');
    assert.ok(route);
  });
});
