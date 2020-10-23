export class UserFilter {
  name: string;

  constructor(item?: any) {
    this.name = item?.name || '';
  }
}