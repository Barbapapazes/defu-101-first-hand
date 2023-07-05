import type { Defu } from 'defu'

interface userConfig {
  app: {
    secure: boolean
  }
}

interface defaultConfig {
  app: {
    port: number
  }
}

type Config = Defu<userConfig, [defaultConfig]>

const config: Config = {
  app: {

  },
}
