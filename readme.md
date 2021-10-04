# Steps

Clone and `cd` into this repo's directory on your filesystem.

```bash
cp test.js /tmp && node -p "require.resolve('/tmp/test', { paths: [] } )"
```

// Should return `tmp/test.js` prefixed with user's filesystem root.

---

Run `yarn test`

Tests not passing.

---

Similar to https://github.com/facebook/jest/issues/9502

Issue: https://github.com/facebook/jest/issues/11927
