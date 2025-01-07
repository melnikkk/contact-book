import 'server-only';
import { SignJWT, jwtVerify, JWTPayload } from 'jose';
import { cookies } from 'next/headers';

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export const encrypt = async (payload: JWTPayload) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('2d')
    .sign(encodedKey);
};

export const decrypt = async (session: string | undefined = '') => {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    });

    return payload;
  } catch (e) {
    console.error('Failed to verify session');
  }
};

export const createSession = async (userId: string) => {
  const expires = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, expires });
  const cookieStore = await cookies();

  cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    expires,
  });
};

export const updateSession = async () => {
  const cookieStore = await cookies();
  const session = cookieStore.get('session')?.value;
  const payload = await decrypt(session);

  if (!session || !payload) {
    return null;
  }

  const expires = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);

  await cookies();

  cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    expires,
  });
};

export const deleteSession = async () => {
  const cookieStore = await cookies();

  cookieStore.delete('session');
};
