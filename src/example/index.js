import Logger,{createLogger} from "react-native-easy-logger";

Logger.log("easy logger:","test")
Logger.info("easy logger:","test")
Logger.warn("easy logger:","test")
Logger.error("easy logger:","test")

Logger.configLogger({
  prefixTemplate:"-------- $prefix --------："
})

Logger.log("easy logger:","test")
Logger.info("easy logger:","test")
Logger.warn("easy logger:","test")
Logger.error("easy logger:","test")

const newLogger = createLogger({
  prefixTemplate:"******$prefix******:"
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