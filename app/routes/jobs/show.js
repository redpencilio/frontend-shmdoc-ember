import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class JobsShowRoute extends Route {
    @service store;
    
    async model(params) {
        return RSVP.hash({
            job: this.store.find('schema-analysis-job', params["schema-analysis-job_id"]),
            units: this.store.findAll('unit')
          });
    }
}
