import Controller from '@ember/controller';
import DefaultQueryParamsMixin from 'ember-data-table/mixins/default-query-params';
import { action } from '@ember/object';


export default class SourcesIndexController extends Controller.extend(DefaultQueryParamsMixin) {
    size = 10;

    @action showSource(source) {
        this.transitionToRoute("sources.show", source.id);
    }
}
