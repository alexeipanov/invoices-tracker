import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class InvoicesEditRoute extends Route {
  @service store;
  model(params) {
    return this.store.peekAll('invoice').objectAt(params.invoice_id);
  }
}
