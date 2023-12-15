export class Tag {

  /*Backend languages*/
  static readonly JAVA = new Tag('Java', 'grey');
  static readonly SPRING = new Tag('Spring Boot', 'green');
  static readonly PYTHON = new Tag('Python', 'pink');
  static readonly NODEJS = new Tag('Node.JS','green');

  /*Frontend languages*/
  static readonly TYPESCRIPT = new Tag( 'TypeScript', 'blue');
  static readonly JAVASCRIPT = new Tag('JavaScript','yellow');
  static readonly ANGULAR = new Tag('Angular','red');
  static readonly HTML = new Tag('Html','orange');
  static readonly CSS = new Tag('CSS','blue');

  /*Others*/
  static readonly BOOTSTRAP = new Tag('Bootstrap','redwine');


  private constructor(private readonly key: string, public readonly color: string) {

  }

  toString() {
    return this.key;
  }

}
