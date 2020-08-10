import Model, { attr } from '@ember-data/model';

export default class SourceModel extends Model {
    @attr name
    @attr created
    @attr note
}
