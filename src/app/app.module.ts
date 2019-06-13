import * as path from 'path'
import { Module, ConfigModule, LoggerModule } from '@nalv/core'

@Module({
  imports: [
    ConfigModule.with(path.join(__dirname, '..', 'config')),
    LoggerModule
  ],
  initializers: [ ],
})
export class AppModule { }
