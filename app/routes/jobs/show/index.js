import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';

export default class JobsShowIndexRoute extends Route.extend(DataTableRouteMixin) {
    modelName = "column";

    // mergeQueryOptions(params) {
    //     let job = this.modelFor('jobs.show');
    //     debugger;
    //     return {
    //         'filter[job][id]':  job.id
    //     };
    // }
}
