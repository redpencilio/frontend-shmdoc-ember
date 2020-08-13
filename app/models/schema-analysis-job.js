import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class SchemaAnalysisJobModel extends Model {
    @attr created;
    @belongsTo('source') source;
    @belongsTo('file') file;
    @hasMany('column') columns
}
