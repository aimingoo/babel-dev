# The project 

A JavaScript parser with private property support.

>
>  *- support Class and ObjectLiteral*
>
>  *- support accessibilities: private, protected and public*
>

@babel/parser based.

>
> @see:
>
>  * [private-property proposal](https://github.com/aimingoo/private-property)
>

## Syntax extpand

The parser support these syntax extpands base private-property proposal.

### Class property and private/protected properies

```javascript
class MyClass {
  // properties
  private x;
  private x = 100;
  private get y() {
    return x^^2
  }
  private set y(v) {
     x+=v;
  }
  
  // methods
  private foo() {}
  private async foo() {}
  
  // class members
  private static x = 100;
  ...
  
  // other accessibilities
  protected x = 100;
  public x = 100;
  ...
```

### private for object literal

```javascript
obj = {
   private x = 100,

   set x(v) {
     x = v;
   },

   get x() {
     return x;
   }
}
```

### access private/protected properties in memthods only

*(The feature come true by language runtime always)*

```javascript
obj = {
  private x = 100,
  
  foo() {
    return x;
  }
}

console.log(obj.foo()); // 100
console.log(obj.x); // nothing
```

## Run test

```
# enter bable-dev lite
> cd ../..

# build
> bash build.sh

# go back
> cd -

# test
> node ./bin/babel-parser.js test/features/private.js options/EnableClassProperties.json
```

## Install

Using npm:

```bash
> npm install .

# (OR, replace "${BABEL-DEV}" byself)
> npm install ${BABEL-DEV}/packages/babel-parser
```



## More information

See website [@babel](https://babeljs.io/docs/en/next/babel-parser.html) for more information.

