import { helper } from '@ember/component/helper';

export default helper(function calcPercentage(val) {
  return (val * 100).toFixed(2);
});
