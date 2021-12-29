class Logger {
    config = {
      prefixTemplate: '',
      prefixPlaceholder: '$prefix',
      prdDebug:false
    };
  
    constructor(configOptions) {
      this.config = Object.assign(this.config, configOptions);
    }
  
    configLogger(configOptions) {
      this.config = Object.assign(this.config, configOptions);
    }
  
    _generatePreFixTemplate(value) {
      const {prefixTemplate, prefixPlaceholder} = this.config;
      if (typeof prefixTemplate != 'string' || prefixTemplate === '') {
        return prefixTemplate;
      }
      return prefixTemplate.replace(prefixPlaceholder, value);
    }
  
    _loggerContent(args) {
      if (args.length === 0) {
        console.error('params must be required!');
      } else if (args.length === 1) {
        return args;
      }
      return [this._generatePreFixTemplate(args[0]), ...args.slice(1)];
    }
  
    _doAction(callback) {
      if (typeof callback != 'function') return;
      if (!this.config.prdDebug&&!__DEV__) return;
      callback();
    }
  
    log(...args) {
      this._doAction(() => {
        console.log(...args);
      });
    }
  
    info(...args) {
      this._doAction(() => {
        console.info(...this._loggerContent(args));
      });
    }
    warn(...args) {
      this._doAction(() => {
        console.warn(...this._loggerContent(args));
      });
    }
    error(...args) {
      this._doAction(() => {
        console.error(...this._loggerContent(args));
      });
    }
    group(...args) {
      this._doAction(() => {
        console.group(...args);
      });
    }
    groupEnd(...args) {
      this._doAction(() => {
        console.groupEnd(...args);
      });
    }
    dir(...args) {
      this._doAction(() => {
        console.dir(...args);
      });
    }
    assert(...args) {
      this._doAction(() => {
        console.assert(...args);
      });
    }
    trace() {
      this._doAction(() => {
        console.trace();
      });
    }
    time(...args) {
      this._doAction(() => {
        console.time(...args);
      });
    }
    timeEnd(...args) {
      this._doAction(() => {
        console.timeEnd(...args);
      });
    }
    profile(...args) {
      this._doAction(() => {
        console.profile(...args);
      });
    }
    profileEnd(...args) {
      this._doAction(() => {
        console.profileEnd(...args);
      });
    }
    count(...args) {
      this._doAction(() => {
        console.count(...args);
      });
    }
    table(...args) {
      this._doAction(() => {
        if(args.length===1){
          console.table(...args);
          return;
        }
        console.info(this._generatePreFixTemplate(args[0]));
        console.table(...(args.slice(1)));
      });
    }
  }
  
  const logger = new Logger({
    prefixTemplate: '',
    prefixPlaceholder: '$prefix',
    prdDebug:false
  });
  
  export const createLogger = config => {
    return new Logger(config);
  };
  
  export default logger;
  