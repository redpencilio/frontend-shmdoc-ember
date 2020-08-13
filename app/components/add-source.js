import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AddSourceComponent extends Component {
    @service store;

    @tracked addingSource = false;
    @tracked sourceName = '';

    @action toggleAddSource() {
        this.addingSource = !this.addingSource;
    }

    @action addSource() {
        if (this.addingSource) {
            let d = new Date() 
            let timestamp = d.toISOString()
            const record = this.store.createRecord('source', {name: this.sourceName, created: timestamp});
            record.save();
            this.addingSource = false;
            this.newSource = ""
            this.newSourceNote = "" 
        } 
    }
}
