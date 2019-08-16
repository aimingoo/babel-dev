# The project 

A JavaScript parser with private property support.

>  *- support Class and ObjectLiteral*
>  *- support accessibilities: private, protected and public*

@babel/parser based.

>
> @see:
>  * [private-property proposal](https://github.com/aimingoo/private-property)
>

## Run test

```
# enter bable-dev lite
> cd ../..

# build
> bash build.sh

# go back
> cd -

# test
> node ./bin/parser.js test/features/private.js options/EnableClassProperties.json
```

## Install

Using npm:

```bash
> npm install .
```



## More information

See website [@babel](https://babeljs.io/docs/en/next/babel-parser.html) for more information.

