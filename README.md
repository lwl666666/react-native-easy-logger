## react-native-easy-logger

### Features
- print log with custom prefix
- don't print log in prd environment 

### Install
`npm install  react-native-easy-logger --save`

### Usage

```javascript
import Logger,{createLogger} from "react-native-easy-logger";

Logger.log("easy logger:","test")
Logger.info("easy logger:","test")
Logger.warn("easy logger:","test")
Logger.error("easy logger:","test")

Logger.configLogger({
  prefixTemplate:"=======$prefix=========："
})

Logger.log("easy logger:","test")
Logger.info("easy logger:","test")
Logger.warn("easy logger:","test")
Logger.error("easy logger:","test")

const newLogger = createLogger({
  prefixTemplate:"-------- $prefix --------:"
})

newLogger.info("new easy logger","new test")

Logger.table({
  a:{ num: "1"},
  b:{ num: "2"},
  c:{ num: "3" }
})

Logger.table("table",{
  a:{ num: "1"},
  b:{ num: "2"},
  c:{ num: "3" }
})
```
![example image](https://github.com/lwl666666/react-native-easy-logger/blob/master/src/assets/example.png "example image")

### Methods

#### createLogger(options)

#### configLogger(options)

config options

|  name | description  | type  |  default |
| ------------ | ------------ | ------------ | ------------ |
| prefixTemplate  | prefix template  |  string | empty string  |
| prefixPlaceholder  | prefix placeholder  | string  | $prefix  |
| prdDebug  | prd environment can print log  | boolean  | false  |

#### log(args)
print log without prefix 

#### info(prefix,args)
print log with prefix

#### warn(prefix,args)
print warning log

#### error(prefix,args)
print error log

#### table(prefix,args)

#### group(args)
#### groupEnd(args)
#### ssert(args)
#### trace(args)
#### time(args)
#### timeEnd(args)
#### profile(args)
#### profileEnd(args)
#### count(args)
#### table(args)

















