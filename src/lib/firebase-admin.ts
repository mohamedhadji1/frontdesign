import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

export const initializeAdminApp = () => {
  if (getApps().length > 0) {
    return getApps()[0];
  }

  const serviceAccount = JSON.parse(
    process.env.FIREBASE_ADMIN_SDK_JSON || '{}'
  );

  return initializeApp({
    credential: cert(serviceAccount),
  });
};

export const getAdminDb = () => {
  const app = initializeAdminApp();
  return getFirestore(app);
};
