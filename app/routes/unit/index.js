import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';

export default class UnitIndexRoute extends Route.extend(DataTableRouteMixin) {
    modelName = "column";

    mergeQueryOptions(params) {
        let unit = this.modelFor('unit');
        return {
            'filter[unit][id]':  unit.id
        };
    }
}
