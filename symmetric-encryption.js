import { createCipheriv, randomBytes, createDecipheriv } from 'crypto';

/// Cipher

const key = randomBytes(32);
const iv = randomBytes(16);


/// Encrypt
export const symmetricEncryptedMessage = message => {
    const cipher = createCipheriv('aes256', key, iv);
    return cipher.update(message, 'utf8', 'hex') + cipher.final('hex');
}

/// Decrypt
export const symmetricDecryptedMessage = encryptedMessage => {
    const decipher = createDecipheriv('aes256', key, iv);
    const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf8');
    return decryptedMessage.toString('utf-8');
}