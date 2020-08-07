import Application from 'frontend-shmdoc/app';
import config from 'frontend-shmdoc/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
