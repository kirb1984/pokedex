export class Pokemon {
  public readonly name: string;
  public readonly spriteUrl: string;

  constructor(json: string) {
    const result = JSON.parse(json);
    this.name = result.name;
    this.spriteUrl = result.spriteUrl;
  }
}
