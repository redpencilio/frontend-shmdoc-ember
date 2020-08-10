import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SourcesShowRoute extends Route {
    @service store;

    async model(params) {
      return this.store.find('source', params.source_id);
    }
}