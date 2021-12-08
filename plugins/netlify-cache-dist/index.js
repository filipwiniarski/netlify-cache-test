const process = require('process');
const fs = require('fs');

module.exports = {
  async onPreBuild({utils}) {
    const files = await utils.cache.list({depth: 10})
    console.log('Cached files', files)

    await utils.cache.restore('dist');
  },
  async onPostBuild({utils}) {
    await utils.cache.save('dist');

    const files = await utils.cache.list({depth: 10})
    console.log('Cached files', files)
  },
};
