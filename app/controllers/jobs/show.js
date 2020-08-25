import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class JobsShowController extends Controller {
    queryParams = ['columnId'];
    @tracked selectedColumn;
    columnId;

    @action selectColumn(column) {
        this.selectedColumn = column;
    }

    @action setSelected() {
        if (this.columnId) {
            this.selectedColumn = this.get('model').columns.filter(function(col) {
                return col.id == this.columnId;
            });
            this.set('columnId', null);
        }
    }
}
