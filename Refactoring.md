# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

In the refactored version, I made the following changes to improve readability. Firstly, I used the optional chaining operator (?.) to condense the if statement for event.partitionKey assignment into one line. Secondly, I removed the unnecessary else block and used a condition to generate a new hash based on the event object if it is passed but does not contain the partitionKey property. Thirdly, I created a function to update and reuse the hash algorithm, reducing redundancy. Lastly, I removed the else block after the typeof check since candidate is only stringified when it's not already a string. These modifications contribute to a more concise and readable code.
