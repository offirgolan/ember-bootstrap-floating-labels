import Ember from 'ember';
import FormElement from 'ember-bootstrap/components/bs-form-element';

const {
  computed
} = Ember;

export default function() {
  FormElement.reopen({
    classNameBindings: ['floatLabel:floating-label', 'hasFocus'],
    floatLabel: computed.or('isVertical', 'isInline'),

    hasContent: computed.notEmpty('value'),
    hasFocus: false,

    didInsertElement() {
      this._super(...arguments);
      if(this.get('hasContent') && this.get('floatLabel')) {
        this.set('hasFocus', true);
      }
    },

    focusIn() {
      this._super(...arguments);
      if(this.get('floatLabel')) {
        this.set('hasFocus', true);
      }
    },

    focusOut() {
      this._super(...arguments);
      if(!this.get('hasContent') && this.get('floatLabel')) {
        this.set('hasFocus', false);
      }
    }
  });
}
