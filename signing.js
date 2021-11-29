import { createSign, createVerify } from 'crypto';
import { keyPair } from './keypair';
const {privateKey, publicKey} = keyPair();
const data = 'this data must be signed';
/// SIGN

const signer = createSign('rsa-sha256');

signer.update(data);

const signature = signer.sign(privateKey, 'hex');

console.log(signature);

/// VERIFY

const verifier = createVerify('rsa-sha256');

verifier.update(data);

export const isVerified = () => verifier.verify(publicKey, signature, 'hex');