import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FileUploaderComponent extends Component {
    @tracked addingSource = false;

    @action toggleAddingSrc() {
        this.addingSource = !this.addingSource;
    }

}
