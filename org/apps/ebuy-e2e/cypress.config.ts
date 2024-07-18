import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run ebuy:serve',
        production: 'nx run ebuy:preview',
      },
      ciWebServerCommand: 'nx run ebuy:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
