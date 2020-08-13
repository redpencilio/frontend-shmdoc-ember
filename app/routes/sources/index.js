import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';
import { inject as service } from '@ember/service';

export default class SourcesRoute extends Route.extend(DataTableRouteMixin) {
    @service store;

    modelName = 'source';
}