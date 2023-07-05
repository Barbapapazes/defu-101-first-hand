import { defu } from 'defu'
import defaultConfig from './default-config'
import userConfig from './user-config'

console.log(defu(userConfig, defaultConfig))
