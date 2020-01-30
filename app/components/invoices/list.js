import Component from '@ember/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';

export default Component.extend({
  startDate: '2020-01-01',

  @computed('invoices.[]', 'startDate')
  get filtered() {
    return this.invoices.filter(invoice => invoice.date > this.startDate);
  },

  @computed('filtered.@each.amount')
  get total() {
    return this.filtered.reduce((sum, invoice) => sum + Number.parseInt(invoice.get('amount')), 0);
  },

  @action
  delete(invoice) {
    invoice.deleteRecord();
  }
});
