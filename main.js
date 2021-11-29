// ESM syntax is supported.
import {hash, signUp, login, showUsers} from './crypto';
import {hmac} from './hmac';
import {symmetricEncryptedMessage, symmetricDecryptedMessage} from './symmetric-encryption';
import {keyPair} from './keypair';
import {asymmetricEncryptData, asymmetricDecryptedData} from './asymmetric-encryption';
import {isVerified} from './signing';

console.log(hash('this is new another one'));

signUp('sabre', 'sabre');

console.log(login('sabre', 'sabre1'));
console.log(login('sabre', 'sabre'));
showUsers();
console.log(hmac('Hello There!'))


const encrypted = symmetricEncryptedMessage('War is coming');
console.log('Decrypted Message', symmetricDecryptedMessage(encrypted));

//keypair
const {privateKey, publicKey} = keyPair();
console.log('private key', privateKey);
console.log('public key', publicKey);


//asymmetric encryption and decryption using public private key
const encryptedData = asymmetricEncryptData('I have a secret');
const decryptedData = asymmetricDecryptedData(encryptedData);
console.log('decryptedData', decryptedData);
console.log('isVerify signer', isVerified());