// Code goes here
var keySize = 256;
var ivSize = 128;
var iterations = 100;

var message = "Hello anh Thaiiii";
var password = "Secret Password";


function encrypt (msg) {  
  var key  =  CryptoJS.enc.Hex.parse("53475673624738675957356f4946526f59576c7061576b3d");

  var iv = CryptoJS.enc.Hex.parse("630a9880a61a85bff9260ea77a2e0481");
  
  var encrypted = CryptoJS.AES.encrypt(msg,key, { 
    iv: iv, 
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
  });
  
  return encrypted;
}

function decrypt (message) {
  var iv = CryptoJS.enc.Hex.parse("630a9880a61a85bff9260ea77a2e0481");
  var encrypted = message;
  
  var key  =  CryptoJS.enc.Hex.parse("53475673624738675957356f4946526f59576c7061576b3d");

  var decrypted = CryptoJS.AES.decrypt(encrypted, key, { 
    iv: iv, 
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
    
  })
  return decrypted;
}

var encrypted = encrypt(message);
var decrypted = decrypt(encrypted);

$('#encrypted').text("Encrypted: "+encrypted);
$('#decrypted').text("Decrypted: "+ decrypted.toString(CryptoJS.enc.Hex) );
