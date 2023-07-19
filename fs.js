const fs = require('fs');

fs.readFile('/etc/passwd', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
});
