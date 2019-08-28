class MyClass {
  // private x, y, z = 100;
  private x;
  private x = 100;
  private x as y;
  private x as y = 200;
  private as y;
  private as y = 100;

  // static, async, get/setter, methods, and more
  private static x;
  private async x() {};
  private *x() {};
  private async *x() {};
  private get x() {};
  private x() {};

  // internal
  internal private x;
  internal private static x;
  internal protected x;
  internal protected static x;

  // public, protected and more
  public x;
  public as x;
  protected x = 100;

  // special names
  internal;
  static;
  as;
  private internal;
  private static;
  private as;

  // computed name or value, for all accessibilities
  private [a+b] = 100; // IdentiferName is result of a+b, maybe suppport
  private a = a+b; // value is a+b

  // normal style
  foo() {}
  static foo() {}
}

obj = {
  private x,
  private x: 100,

  // async, get/setter, methods, and more
  private async x() {},
  private get x() {},
  private x() {},

  // public only
  public x,
  public x: 100
}
