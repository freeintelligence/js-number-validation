import { LoggerConfig, logs_path } from '@nalv/core'

/*
 *
 * */
export default <LoggerConfig>{

  /*
   * Logger level
   * */
  'level': 'debug',

  /*
   * Directory for loggs
   * */
  'dir': logs_path(),

}
