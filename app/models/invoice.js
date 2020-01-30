import Model, { attr } from '@ember-data/model';
import { computed } from '@ember/object';

export default class InvoiceModel extends Model {
  @attr('number') amount;
  @attr('date') date;

  get formattedDate() {
    if (this.date instanceof Date) {
      return `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${this.date.getDate()}`;
    }
    else return this.date;
  };

}
