const core = require('@actions/core');
// const github = require('@actions/github');
const exec = require('@actions/exec');

// The commented out code would connect to AWS if we had it set up
async function run() {
  // 1) Get some input values
  /*
  const bucket = core.getInput('bucket', { required: true });
  const bucketRegion = core.getInput('bucket-region', { required: true });
  const distFolder = core.getInput('dist-folder', { required: true });
  */

  // 2) Upload files
  /*
  const s3Uri = `s3://${bucket}`;
  exec.exec(`echo aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);
  */

  // 3) Construct a url to output rather than needing to go to AWS every time
  /*
  const websiteUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`;
  core.setOutput('website-url', websiteUrl);
  */

  core.notice('Hello from my custom JavaScript Action!');
}

run();
