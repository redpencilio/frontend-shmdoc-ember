import Model, { attr, hasMany } from '@ember-data/model';

export default class SourceModel extends Model {
    @attr name;
    @attr created
    @attr description;
    @attr note;
    @hasMany('schema-analysis-job') analysisJobs;
}
