import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class InvoicesNewRoute extends Route {
  @service store;
  model() {
    return this.store.createRecord('invoice', {
      date: null,
      amount: 0
    });
  }
}
