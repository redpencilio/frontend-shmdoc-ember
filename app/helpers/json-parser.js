import { helper } from '@ember/component/helper';

export default helper(function jsonParser(params) {
  return JSON.parse(params);
});
