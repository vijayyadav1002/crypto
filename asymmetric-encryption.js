import {  publicEncrypt, privateDecrypt } from 'crypto';
import {keyPair} from './keypair';
const {privateKey, publicKey} = keyPair();

export const asymmetricEncryptData = (secretMessage) => {
    const encryptedData = publicEncrypt(
        publicKey,
        Buffer.from(secretMessage)
    );
    return encryptedData.toString('hex');
};

export const asymmetricDecryptedData = encryptedData => {
    const decryptedData = privateDecrypt(
        privateKey,
        Buffer.from(encryptedData, 'hex')
    );
    return decryptedData.toString('utf-8');
};