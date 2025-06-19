const express = require('express');

const app = express();

// 1. CWE-79: Cross-Site Scripting (XSS) - Reflected
app.get('/xss', (req, res) => {
  const userInput = req.query.input; // 🚨 Vulnerable

  res.send(`<h1>${userInput}</h1>`);
});
// Fix: Escape user input before rendering.

// 2. CWE-89: SQL Injection
app.get('/sql', (req, res) => {
  const userId = req.query.id;

  db.query(`SELECT * FROM users WHERE id = '${userId}'`, (err, result) => {
    res.json(result); // 🚨 Vulnerable
  });
});
// Fix: Use parameterized queries.

// 3. CWE-20: Improper Input Validation
app.post('/validate', (req, res) => {
  const age = req.body.age;

  if (isNaN(age)) {
    res.send('Invalid age'); // 🚨 Vulnerable: No strict type checking
  }
});
// Fix: Validate input properly

// 4. CWE-502: Insecure Deserialization
app.post('/deserialize', (req, res) => {
  const userData = eval(req.body.data); // 🚨 Dangerous

  res.json(userData);
});
// Fix: Avoid eval(); use JSON.parse()

// 5. CWE-434: Unrestricted File Upload
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded'); // 🚨 No validation
});
// Fix: Validate file type and size.

// 6. CWE-306: Missing Authentication
app.get('/admin', (req, res) => {
  res.send('Admin Panel'); // 🚨 No authentication required
});
// Fix: Require authentication and authorization.

// 7. CWE-601: Open Redirect
app.get('/redirect', (req, res) => {
  res.redirect(req.query.url); // 🚨 Allows phishing attacks
});
// Fix: Validate URLs before redirecting.

// 8. CWE-798: Hardcoded Credentials
const DB_PASSWORD = 'password123'; // 🚨 Hardcoded secret
// Fix: Use environment variables.

// 9. CWE-94: Code Injection
app.get('/exec', (req, res) => {
  exec(req.query.cmd, (err, stdout) => {
    // 🚨 Allows remote command execution
    res.send(stdout);
  });
});
// Fix: Whitelist allowed commands.

// 10. CWE-862: Missing Authorization
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;

  res.send(`User data for ${userId}`); // 🚨 No permission check
});
// Fix: Ensure user permissions are checked.

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
