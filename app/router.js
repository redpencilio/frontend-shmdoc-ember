import EmberRouter from '@ember/routing/router';
import config from 'frontend-shmdoc/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('new-job');
  this.route('running-jobs');
  this.route('sources');
});
