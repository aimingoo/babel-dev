# Babel-dev

A lite version babel for plugins/packages developer.

> * A demo:
>    [https://github.com/aimingoo/babel-dev/packages/babel-parser](https://github.com/aimingoo/babel-dev/packages/babel-parser)



## Usage

```shell
# Get plugins/packages from Babel
#  - export any package, ex: 'babel-core'
> cd packages
> svn export https://github.com/babel/babel/trunk/packages/babel-core
> cd ..

# Init and try build it
> bash build.sh
```



## More

* Watch and realtime babel-compile

  ```shell
  > glup watch
  ```

  

* Refresh project files

  ```shell
  > rm packages.json
  > bash build.sh
  ```



See website [@babel](https://babeljs.io/docs/en) for more information.

