var key = aesjs.utils.utf8.toBytes("SGVsbG8gYW5oIFRoYWlpaWk=");
// The initialization vector (must be 16 bytes)
var iv = [99, 10, 152, 128, 166, 26, 133, 191, 249, 38, 14, 167, 122, 46, 4, 129];

// Convert text to bytes (text must be a multiple of 16 bytes)
var text = 'Hello anh Thaiiii';
var textBytes = aesjs.utils.utf8.toBytes(text);

var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
const paddedData = aesjs.padding.pkcs7.pad(textBytes);
var encryptedBytes = aesCbc.encrypt(paddedData);

// To print or store the binary data, you may convert it to hex
var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
console.log(encryptedHex);
// "104fb073f9a131f2cab49184bb864ca2"

// When ready to decrypt the hex string, convert it back to bytes
var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);

// The cipher-block chaining mode of operation maintains internal
// state, so to decrypt a new instance must be instantiated.
var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
var decryptedBytes = aesCbc.decrypt(encryptedBytes);

// Convert our bytes back into text
var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
console.log(decryptedText);
// "TextMustBe16Byte"
$('#encrypted').text("Encrypted: "+ encryptedHex);
$('#encrypted_base64').text("Encrypted Base64: "+ decryptedText);