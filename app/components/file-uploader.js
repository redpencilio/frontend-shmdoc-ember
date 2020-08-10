import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class FileUploaderComponent extends Component {
    @service store;
    
    @tracked addingSource = false;
    @tracked newSource = "";
    @tracked newSourceNote = "";
    @tracked selectedSource = "";

    @action cancelAddSource() {
        this.newSource = "";
        this.addingSource = false;
    }

    @action addSource() {
        if (this.addingSource) {
            let d = new Date()
            let timestamp = d.toISOString()
            const record = this.store.createRecord('source', {name: this.newSource, created: timestamp, note: this.newSourceNote});
            record.save();
            this.addingSource = false;
            this.selectedSource = this.newSource;
        } else {
            this.addingSource = true;
        }
        this.newSource = ""
        this.newSourceNote = ""
    }

}
