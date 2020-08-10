import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FileUploaderComponent extends Component {
    @tracked runningJobs = [];
    @tracked finsihedJobs = [];

    @action noContent() {
        return this.runningJobs.length == 0 && this.finsihedJobs.length == 0;
    }
}
