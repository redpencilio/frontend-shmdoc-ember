import Controller from '@ember/controller';
import DefaultQueryParamsMixin from 'ember-data-table/mixins/default-query-params';
import { action } from '@ember/object';

export default class SourcesShowIndexController extends Controller.extend(DefaultQueryParamsMixin) {
    size = 5;

    @action showJob(job) {
        this.transitionToRoute("sources.show.jobs.show", job.id);
    }
}
