// Code goes here
var keySize = 256;
var ivSize = 128;

var message = "Hello anh Thaiiii";


var key = CryptoJS.enc.Hex.parse(
  "3666613937396632303132366362303861613634356138663439356636643835"
);
var iv = CryptoJS.enc.Hex.parse("630a9880a61a85bff9260ea77a2e0481");

var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(message), key,
    {
        keySize: keySize / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
    keySize: keySize / 8,
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
});

console.log('Encrypted :' + encrypted);
console.log('Key :' + encrypted.key);
console.log('Salt :' + encrypted.salt);
console.log('iv :' + encrypted.iv);
console.log('Decrypted : ' + decrypted);
console.log('utf8 = ' + decrypted.toString(CryptoJS.enc.Utf8));

function encrypt(msg) {
  var key = CryptoJS.enc.Hex.parse(
    "3666613937396632303132366362303861613634356138663439356636643835"
  );
  var iv = CryptoJS.enc.Hex.parse("630a9880a61a85bff9260ea77a2e0481");
  
  var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(message), key,
      {
          keySize: keySize / 8,
          iv: iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
      });

  console.log("encrypted   " + encrypted);

  return encrypted;
}


function decrypt(message) {
  var key = CryptoJS.enc.Hex.parse(
    "3666613937396632303132366362303861613634356138663439356636643835"
  );
  var iv = CryptoJS.enc.Hex.parse("630a9880a61a85bff9260ea77a2e0481");

  var decrypted = CryptoJS.AES.decrypt(message, key, {
    keySize: 256 / 8,
    iv: iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
  });
  return decrypted;
}

function toWordArray(str) {
  return CryptoJS.enc.Utf8.parse(str);
}

function toString(words) {
  return CryptoJS.enc.Utf8.stringify(words);
}

function toBase64String(words) {
  return CryptoJS.enc.Base64.stringify(words);
}

var encrypted = encrypt(message);

console.log("encrypted.key");
console.log(encrypted.key);
console.log("encrypted.iv");
console.log(encrypted.iv);

var decrypted = decrypt(encrypted);

$("#encrypted").text("Encrypted: " + encrypted);
$("#encrypted_base64").text("Encrypted Base64: ");
$("#decrypted").text("Decrypted: " + decrypted.toString(CryptoJS.enc.Hex));
