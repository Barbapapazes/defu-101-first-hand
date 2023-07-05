import defaultConfig from './default-config'
import userConfig from './user-config'

const defaultLocaleConfig = {
  app: {
    port: 3000,
    secure: false,
  },
}

const userLocaleConfig = {
  app: {
    secure: true,
  },
}

function merge(defaultConfig, userConfig) {
  const keys = new Set([...Object.keys(defaultConfig), ...Object.keys(userConfig)])

  const mergedConfig = {}

  for (const key of keys) {
    const defaultValue = defaultConfig[key]
    const userValue = userConfig[key]

    if (Array.isArray(defaultValue) || Array.isArray(userValue))
      mergedConfig[key] = [...defaultValue, ...userValue]

    else if (typeof defaultValue === 'object' || typeof userValue === 'object')
      mergedConfig[key] = merge(defaultValue, userValue)

    else
      mergedConfig[key] = userValue || defaultValue
  }

  return mergedConfig
}

console.log(merge(defaultLocaleConfig, userLocaleConfig))

console.log(merge(defaultConfig, userConfig))
