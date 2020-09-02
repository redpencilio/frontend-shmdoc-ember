import Controller from '@ember/controller';
import DefaultQueryParamsMixin from 'ember-data-table/mixins/default-query-params';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { getOwner } from '@ember/application';


export default class SourcesIndexController extends Controller.extend(DefaultQueryParamsMixin) {
    size = 10;
    sort = "-created";

    @tracked showToast = false;

    @tracked addingSource = false;
    @tracked sourceName = '';

    @service store;
    
    @action showSource(source) {
        this.transitionToRoute("sources.show", source.id);
    }

    @action toggleAddSource() {
        this.addingSource = !this.addingSource;
    }

    @action async addSource() {
        if (this.addingSource) {
            let d = new Date() ;
            let timestamp = d.toISOString();
            await this.store.createRecord('source', {name: this.sourceName, created: timestamp}).save();
            this.addingSource = false;
            this.newSource = "";
            this.newSourceNote = "" ;
            this.showToast = true;
            getOwner(this).lookup("route:sources/index").refresh();
        } 
    }

    @action closeToast() {
        this.showToast = false;
    }
}
