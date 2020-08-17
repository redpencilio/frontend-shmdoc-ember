import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';

export default class SourcesShowIndexRoute extends Route.extend(DataTableRouteMixin) {
    modelName = "schema-analysis-job";

    mergeQueryOptions(params) {
        let source = this.modelFor('sources.show');
        return {
            'filter[source][id]':  source.id
        };
    }
}
