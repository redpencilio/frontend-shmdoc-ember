import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';

export default class SourcesShowIndexRoute extends Route.extend(DataTableRouteMixin) {
    modelName = "schema-analysis-job";

    mergeQueryOptions(params) {
        return {
            //'filter[source.id]': "5F310DE18797B70009000004"
        };
    }
}
