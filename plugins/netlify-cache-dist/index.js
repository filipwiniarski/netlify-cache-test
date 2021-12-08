const process = require('process');
const fs = require('fs');

module.exports = {
  async onPreBuild({utils}) {
    await utils.cache.restore('dist');
  },
  async onPostBuild({utils}) {
    await utils.cache.save('dist');
  },
};
