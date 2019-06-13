#!/usr/bin/env node
import { Bootstrap } from '@nalv/core'

import { AppModule } from './app/app.module'

Bootstrap.module(new AppModule(), { require: require })
