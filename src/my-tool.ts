import defaultConfig from './default-config'
import userConfig from './user-config'

const config = Object.assign({}, defaultConfig, userConfig)

console.log(config)
