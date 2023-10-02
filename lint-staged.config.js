module.exports = {
    '*.{ts,tsx}': ['eslint', 'npm run format:fix', () => 'npm run types:check'],
};
