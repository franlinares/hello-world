export class User {
  id: number;
  name: string;
  birthdate: Date;

  constructor(item?: any) {
    this.id = item?.id || 0;
    this.name = item?.name || '';
    this.birthdate = item?.birthdate || new Date();
  }
}