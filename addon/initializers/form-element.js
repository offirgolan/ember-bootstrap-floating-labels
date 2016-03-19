import Ember from 'ember';
import FormElement from 'ember-bootstrap/components/bs-form-element';

const {
  run,
  isEmpty,
  computed
} = Ember;

export default function() {
  FormElement.reopen({
    classNameBindings: ['floatLabel:floating-label'],
    floatLabel: computed.or('isVertical', 'isInline'),

    didInsertElement() {
      this._super(...arguments);
      if (this.get('floatLabel')) {
        this.$('.form-control').on('focusin.bs-floating focusout.bs-floating blur.bs-floating', (e) => {
          this.$().toggleClass('focused', (e.type === 'focusin' || !isEmpty(this.get('value'))));
        });
        if (!isEmpty(this.get('value'))) {
          run.scheduleOnce('afterRender', () => {
            this.$('.form-control').trigger('blur');
          });
        }
      }
    },

    willDestroyElement() {
      this._super(...arguments);
      this.$().off('focusin.bs-floating focusout.bs-floating blur.bs-floating');
    }
  });
}
