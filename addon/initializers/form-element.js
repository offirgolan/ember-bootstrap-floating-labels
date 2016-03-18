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
        this.$('.form-control').on('focus.bs-floating blur.bs-floating', (e) => {
          this.$().toggleClass('focused', (e.type === 'focus' || !isEmpty(this.get('value'))));
        });
        run.scheduleOnce('afterRender', () => {
          this.$('.form-control').trigger('blur');
        });
      }
    },

    willDestroyElement() {
      this._super(...arguments);
      this.$().off('focus.bs-floating blur.bs-floating');
    }
  });
}
