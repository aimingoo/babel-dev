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

```sh
> npm install .

# (OR)
> npm install https://github.com/aimingoo/babel-dev/packages/babel-parser
```



## More information

See website [@babel/parser](https://babeljs.io/docs/en/next/babel-parser.html) for more information or the [issues](https://github.com/babel/babel/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3A%22pkg%3A+parser+%28babylon%29%22+is%3Aopen) associated with this package.

