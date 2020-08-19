import Model, { attr, belongsTo } from '@ember-data/model';

export default class ColumnModel extends Model {
    @attr name;
    @attr path;
    @attr description;
    @attr note;
    @attr disableProcessing;
    @attr dataType;
    @attr quantityKind;
    @attr recordCount;
    @attr missingCount;
    @attr nullCount;
    @attr min;
    @attr max;
    @attr mean;
    @attr median;
    @attr commonValues;
    @belongsTo('schema-analysis-job') job;
    @belongsTo('unit') unit;
}
