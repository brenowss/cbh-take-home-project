const crypto = require('crypto');

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = '0';
  const MAX_PARTITION_KEY_LENGTH = 256;

  let candidate = TRIVIAL_PARTITION_KEY;

  const updateHash = (data) =>
    crypto.createHash('sha3-512').update(data).digest('hex');

  if (event) {
    candidate = event?.partitionKey || updateHash(JSON.stringify(event));
  }

  if (typeof candidate !== 'string') {
    candidate = JSON.stringify(candidate);
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = updateHash(candidate);
  }

  return candidate;
};
