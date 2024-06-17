// validateURL.js
function validateURL(url) {
    const re = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return re.test(url);
  }
  
  module.exports = validateURL;
  