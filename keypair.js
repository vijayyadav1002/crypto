import { generateKeyPairSync } from 'crypto';

export const keyPair = () => generateKeyPairSync('rsa', {
    modulusLength: 2048, // the length of your key in bits
    publicKeyEncoding: {
        type: 'spki', // recommended to be 'spki' by the Node.js docs
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8', // recommended to be 'pkcs8' by the Node.js docs
        format: 'pem',
    },
});