const { deterministicPartitionKey } = require('./dpk');

describe('deterministicPartitionKey', () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe('0');
  });

  it('Uses the provided partition key if it exists', () => {
    const event = { partitionKey: 'myPartitionKey' };
    const key = deterministicPartitionKey(event);
    expect(key).toBe('myPartitionKey');
  });

  it('Generates a SHA3-512 hash of the event data if no partition key is provided', () => {
    const event = { data: 'test' };
    const key = deterministicPartitionKey(event);
    const expectedKey =
      'f5d852e6eaf19c22a5fe0b2de3ab4df2d1732d61d61f89e4e055d716a8eba4210fc55b41e0cfe96d8c98adfa22b1d45d14d07b3d865e59c5fa59a0e79b57967c';
    expect(key).toBe(expectedKey);
  });

  it('Generates a SHA3-512 hash of the partition key if it is longer than 256 characters', () => {
    const longKey = 'a'.repeat(300);
    const event = { partitionKey: longKey };
    const key = deterministicPartitionKey(event);
    const expectedKey =
      '7350d99d1a20435c283070f3613302edb7027fced163086b048bd3ded530c5cb7a8ced83d1c6fda78f8832c61fb02698d14252c6b4ecf6989b81b04ca99a6302';
    expect(key).toBe(expectedKey);
  });
});
