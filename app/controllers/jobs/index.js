import Controller from '@ember/controller';
import DefaultQueryParamsMixin from 'ember-data-table/mixins/default-query-params';
import { action } from '@ember/object';

export default class JobsIndexController extends Controller.extend(DefaultQueryParamsMixin)   {
    size = 5;
    sort = "-created";

    @action showJob(job) {
        this.transitionToRoute("jobs.show", job.id);
    }

    @action isFinished(columns) {
        return columns > 0;
    }
}
