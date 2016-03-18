import Ember from 'ember';
import getOwner from 'ember-getowner-polyfill';

export default Ember.Route.extend({
	model() {
		return getOwner(this).lookup('model:dummy');
	}
});
