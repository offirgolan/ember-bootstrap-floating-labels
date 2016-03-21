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
    _inFocus: false,

    hasFocus: computed('floatLabel', 'hasContent', 'disabled', '_inFocus', function() {
      return this.get('floatLabel') && (this.get('hasContent') || this.get('disabled') || this.get('_inFocus'));
    }),

    focusIn() {
      this._super(...arguments);
      this.set('_inFocus', true);
    },

    focusOut() {
      this._super(...arguments);
      this.set('_inFocus', false);
    }
  });
}
