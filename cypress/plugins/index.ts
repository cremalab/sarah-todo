import { config } from "dotenv"
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

config()
export default (_on: Cypress.PluginEvents, config: Cypress.ConfigOptions) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  if (config.env) {
    config.env.googleRefreshToken = process.env.GOOGLE_REFRESH_TOKEN
    config.env.googleClientId = process.env.REACT_APP_GOOGLE_CLIENTID
    config.env.googleClientSecret = process.env.REACT_APP_GOOGLE_CLIENT_SECRET
  }
  return config
}
