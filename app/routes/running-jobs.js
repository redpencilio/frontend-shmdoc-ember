import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RunningJobsRoute extends Route {
    @service store;

    async model(params) {
        return this.store.findAll('schema-analysis-job');
    }
}
