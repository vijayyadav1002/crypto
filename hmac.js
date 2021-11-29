import { createHmac } from 'crypto';

const password = 'super-secret!';

export const hmac = (message) => createHmac('sha256', password).update(message).digest('hex');