export class Tag {

  static readonly JAVA = new Tag('Java', 'orange');
  static readonly PYTHON = new Tag('Python', 'pink');
  static readonly TYPESCRIPT = new Tag( 'TypeScript', 'blue');
  static readonly JAVASCRIPT = new Tag('JavaScript','yellow');
  static readonly ANGULAR = new Tag('Angular','red');
  static readonly NODEJS = new Tag('Node.JS','green');

  private constructor(private readonly key: string, public readonly color: string) {

  }

  toString() {
    return this.key;
  }

}
