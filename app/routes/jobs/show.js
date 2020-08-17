import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class JobsShowRoute extends Route {
    @service store;
    
    async model(params) {
        return this.store.find('schema-analysis-job', params["schema-analysis-job_id"]);
    }
}
