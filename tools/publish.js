const path = require('path');
const build = require('./build');
const task = require('./task');
const config = require('./config');
const s3 = require('s3');

const version = `v/${Date.now()}`;
const s3Path = `test/${config.s3path}`;
const s3VersionPath = `${s3path}/${version}`;
// const assetPath = isDeploy ? `${cdnUrl}/${s3VersionPath}` : '.';

// Build and deploy the app to an S3 bucket
module.exports = task('publish', () =>
  Promise.resolve()
    .then(() => build())
    .then(() => {
      // create a file containing a pointer to the latest version
      fs.writeFile('live', version, err => {
        if (err) throw err;
      });
    })
    .then(
      () =>
        new Promise((resolve, reject) => {
          const client = s3.createClient({
            s3Options: {
              region: config.s3region,
              sslEnabled: true
            }
          });
          const uploader = client.uploadDir({
            localDir: 'public',
            deleteRemoved: true,
            s3Params: {
              Bucket: config.s3bucket,
              Prefix: s3VersionPath,
              ACL: 'public-read',
              CacheControl: 'max-age=31536000'
            }
          });

          uploader.on('error', reject);
          uploader.on('end', resolve);
        })
    )
    .then(() => {
      setTimeout(() => process.exit());
    })
);
