import Model, { attr, hasMany} from '@ember-data/model';

export default class UnitModel extends Model {
    @attr name;
    @attr notation;
    @attr uri;
    @attr definition;
    @hasMany('column') columns;
}
