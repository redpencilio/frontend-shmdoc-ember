import Model, { attr } from '@ember-data/model';

export default class FileModel extends Model {
    @attr filename;
    @attr format;
    @attr size;
    @attr extension;
    @attr created;
    @attr contentType;
    @attr file; // Downloadable file
}
