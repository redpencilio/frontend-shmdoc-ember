import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { getOwner } from '@ember/application';

export default class SourcesShowController extends Controller { 
    @tracked addingAnalysis = false;
    @tracked edittingSource = false;

    @tracked sourceName = this.get('model').name;
    @tracked sourceDescription = this.get('model').description;
    @tracked sourceNote = this.get('model').note;

    @tracked files = [];
    @tracked filesEmpty = true;
    @tracked selectedAnalysis = null;

    @tracked showToast = false;

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
        const source = await this.store.findRecord('source', this.get('model').id);
        source.name = this.sourceName;
        source.description = this.sourceDescription;
        source.note = this.sourceNote;
        source.save();
        this.toggleEditSource();
    }

    @action 
    handleFileChange(file) {
        this.files.pushObject(file);
        this.filesEmpty = false;
          
      }

    @action 
    removeFile(file) {
        this.files = this.files.filter(f => f.name !== file.name);
        if (this.files.length == 0) {
            this.filesEmpty = true;
        }
    }

    @action 
    async uploadFiles(sourceId) {
        let d = new Date() 
        let timestamp = d.toISOString()
        let source = this.store.peekRecord( 'source', sourceId);
        for (const file of this.files) {
            let result = await file.upload("/files");
            this.store.pushPayload('file', result.body);
            let uploadedFile = this.store.peekRecord( 'file', result.body.data.id );

            // If an analysis is selected, the new record will take the notes, description and unit from the selected analysis.
            let resultJob = await this.store.createRecord('schema-analysis-job', {
                source: source,
                file: uploadedFile,
                created: timestamp}).save();
            fetch(`/schema-analysis-jobs/${resultJob.id}/run`, {method:"POST"});
        }
        source.save();
        this.files = [];
        this.filesEmpty = true;
        this.showToast = true;

        // Refresh the dataTable
        getOwner(this).lookup("route:sources/show/index").refresh();
    }

    @action closeToast() {
        this.showToast = false;
    }
}
