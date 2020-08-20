import Controller from '@ember/controller';
import DefaultQueryParamsMixin from 'ember-data-table/mixins/default-query-params';
import { action } from '@ember/object';


export default class UnitIndexController extends Controller.extend(DefaultQueryParamsMixin) {
    size = 5;

    @action showColumn(col) {
        this.transitionToRoute('jobs.show', col.job.get('id'), { queryParams: { columnId: col.id }});
    }
}
