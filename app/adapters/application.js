import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
    // namespace = 'localhost';
    buildURL(...args) {
        return `${super.buildURL(...args)}`;
      }
}