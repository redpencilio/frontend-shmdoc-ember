import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ColumnCardComponent extends Component {
    @service store;

    @tracked edittingColumn = false;
    @tracked selectedColumn;

    @tracked columnDescription;
    @tracked columnNote;
    @tracked columnDataType;
    @tracked columnQuantityKind;
    @tracked columnUnitName;
    @tracked columnDisableProcessing;

    @action editColumn(column) {
        this.selectedColumn = column;
        this.columnDescription = this.selectedColumn.description;
        this.columnNote = this.selectedColumn.note;
        this.columnDataType = this.selectedColumn.dataType;
        this.columnQuantityKind = this.selectedColumn.quantityKind;
        this.columnUnitName = this.selectedColumn.unit.name;
        this.columnDisableProcessing = this.selectedColumn.disableProcessing;
        this.toggleEditColumn();
    }

    @action toggleEditColumn() {
        this.edittingColumn = !this.edittingColumn;
    }

    @action cancelEdit() {
        this.columnDescription = this.selectedColumn.description;
        this.columnNote = this.selectedColumn.note;
        this.columnDataType = this.selectedColumn.dataType;
        this.columnQuantityKind = this.selectedColumn.quantityKind;
        this.columnUnit = this.selectedColumn.unit;
        this.columnDisableProcessing = this.selectedColumn.disableProcessing;
        this.toggleEditColumn();
    }

    @action async confirmEdit() {
        const column = await this.store.findRecord('column', this.selectedColumn.id);        
        column.description = this.columnDescription;
        column.note = this.columnNote;
        column.dataType = this.columnDatatype;
        column.quantityKind = this.columnQuantityKind;
        column.unit.name = this.columnUnitName;
        column.disableProcessing = this.columnDisableProcessing;
        column.save();
        this.toggleEditColumn();
    }
}
