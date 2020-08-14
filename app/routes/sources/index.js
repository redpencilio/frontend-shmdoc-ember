import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';

export default class SourcesRoute extends Route.extend(DataTableRouteMixin) {
    modelName = 'source';
}