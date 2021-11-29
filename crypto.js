import { createHash, scryptSync, randomBytes, timingSafeEqual } from 'crypto';
const users = [];

export const hash = input => createHash('sha256').update(input).digest('base64'); //base64 | hex
export const signUp = (email, password) => {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex'); // 64 is length
    const user = {
        email,
        password: `${salt}:${hashedPassword}`
    };
    users.push(user);
};

export const login = (email, password) => {
    const user = users.find(u => u.email === email);
    const [salt, key] = user.password.split(':');
    const toMatchHashedPassword = scryptSync(password, salt, 64);
    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(keyBuffer, toMatchHashedPassword);
    if (match) {
        return 'Login Success!'
    } else {
        return 'Login fail!'
    }
};

export const showUsers = () => console.log(users);