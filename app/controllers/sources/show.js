import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SourcesShowController extends Controller { 
    @tracked addingAnalysis = false;
    @tracked edittingSource = false;

    @tracked sourceName = this.get('model').name;
    @tracked sourceDescription = this.get('model').description;
    @tracked sourceNote = this.get('model').note;

    @action showJob(job) {
        this.transitionToRoute("sources.show.jobs.show", job.id)
    }

    @action toggleAddAnalysis() {
        this.addingAnalysis = !this.addingAnalysis;
    }

    @action toggleEditSource() {
        this.edittingSource = !this.edittingSource;
    }

    @action cancelEdit() {
        this.sourceName = this.get('model').name;
        this.sourceDescription = this.get('model').description;
        this.sourceNote = this.get('model').note;
        this.toggleEditSource();
    }

    @action async confirmEdit() {
        const source = await this.store.findRecord('source', this.get('model').id)
        source.name = this.sourceName;
        source.description = this.sourceDescription;
        source.note = this.sourceNote;
        source.save();
        this.toggleEditSource();
    }
}
