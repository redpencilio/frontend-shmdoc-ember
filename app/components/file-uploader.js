import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class FileUploaderComponent extends Component {
    @service store;
    
    @tracked files = [];
    @tracked filesEmpty = true;

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
        const source = this.store.peekRecord( 'source', sourceId);
        
        for (const file of this.files) {
            const result = await file.upload("/files");
            this.store.pushPayload('file', result.body);
            const uploadedFile = this.store.peekRecord( 'file', result.body.data.id );
            await this.store.createRecord('schema-analysis-job', {
                source: source,
                file: uploadedFile,
                created: timestamp}).save()
        }
        source.save();
        this.files = [];
        this.filesEmpty = true;
    }
}
