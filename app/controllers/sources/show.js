import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SourcesShowController extends Controller { 
    @tracked addingAnalysis = false;

    @action showJob(job) {
        this.transitionToRoute("sources.show.jobs.show", job.id)
    }

    @action toggleAddAnalysis() {
        this.addingAnalysis = !this.addingAnalysis;
    }
}
