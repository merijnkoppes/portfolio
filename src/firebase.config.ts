import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { environment } from './environments//environment';

const firebaseApp = initializeApp(environment.firebase);

export const firebaseStorage = getStorage(firebaseApp);
