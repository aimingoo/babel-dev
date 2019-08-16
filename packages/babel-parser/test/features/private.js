class MyClass {
  private x;
  private x = 100;
  private x as y;
  private x as y = 200;
  private as y;
  private as y = 100;
  private as y = 100;

  // static, async, get/setter, methods, and more
  private static x;
  private async x() {};
  private get x() {};
  private x() {};

  // public, protected and more
  public x;
  public as x;
  protected x = 100;
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