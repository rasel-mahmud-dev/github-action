# Node.js Application with CI Workflow

This project leverages **GitHub Actions** for Continuous Integration (CI) to automatically test the application using the **Mocha** testing framework. The workflow is designed to ensure code quality by running tests on every push to the repository.

## Workflow Details

The CI workflow performs the following steps:

1. **Trigger**: The workflow runs automatically on every `push` to the repository.
2. **Environment Setup**:
   - Checks out the repository's code using the `actions/checkout@v4` action.
   - Sets up a Node.js environment using the `actions/setup-node@v2`, specifying **Node.js v22**.
3. **Install Dependencies**: Installs production dependencies with `npm install --production`.
4. **Run Tests**: Executes the test suite with `npm run test`.
5. **Feedback**: Outputs "All tests passed!" if all tests are successful.

## GitHub Actions Workflow

Below is the configuration file for the GitHub Actions workflow:

```yaml
name: Test Application Using Mocha

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '22'

      - name: Install Dependencies
        run: npm install --production

      - name: Run Tests
        run: npm run test

      - name: Success Confirmation
        run: echo "All tests passed!"
```

## How to Use This Workflow

1. **Add Tests**: Ensure your application has a `test` script defined in the `package.json` file (e.g., `"test": "mocha"`).
2. **Push Changes**: Push your code to the repository. The workflow will run automatically.
3. **Check Status**: View the status of your tests in the GitHub Actions tab.

## Benefits of This Workflow

- **Automation**: Automatically runs tests on every push.
- **Early Feedback**: Quickly identifies issues in your codebase.
- **Consistency**: Ensures a consistent testing environment with a fixed Node.js version.
