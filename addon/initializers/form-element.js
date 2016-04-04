import Ember from 'ember';
import FormElement from 'ember-bootstrap/components/bs-form-element';

const {
  isEmpty,
  computed
} = Ember;

export default function() {
  FormElement.reopen({
    classNameBindings: ['floatLabel:floating-label', 'hasFocus'],
    floatLabel: computed.or('isVertical', 'isInline'),

    _inFocus: false,
    hasContent: computed('value', function() {
      return this._hasContent(this.get('value'));
    }),

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
    },

    /**
     * Handle content of ember proxy based instances
     */
    _hasContent(value) {
      if (value instanceof Ember.ObjectProxy || value instanceof Ember.ArrayProxy) {
        return this._hasContent(value.get('content'));
      }
      return !isEmpty(value);
    }
  });
}
