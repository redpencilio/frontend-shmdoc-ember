import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SourcesShowController extends Controller { 
    @tracked source = null;

    @action
    souceIsNull() {
        return source == null;
    }

    @action
    addAnalysis() {
        
    }
}
