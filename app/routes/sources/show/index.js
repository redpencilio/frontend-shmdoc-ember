import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';
import { inject as service } from '@ember/service';

export default class SourcesShowIndexRoute extends Route.extend(DataTableRouteMixin) {
    modelName = "schema-analysis-job";

    mergeQueryOptions(params) {
        let source = this.modelFor('sources.show');
        return {
            'filter[source][id]':  source.id
        };
    }
}
