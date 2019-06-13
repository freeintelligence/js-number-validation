import { AppConfig, production } from '@nalv/core'

/*
 *
 * */
export default <AppConfig>{

  /*
   * App name
   * */
  'name': 'Nalv.io',

  /*
   * App url
   * */
  'url': 'http://localhost',

  /*
   * Environment
   *
   * Some features change their operation according to the environment in which the application is running.
   * */
  'env': 'development',

  /*
   * Is app in debug mode
   *
   * For production it is set to "false"
   * */
  'debug': production() ? false : true,

}
