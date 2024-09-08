import { Injectable } from '@angular/core';
import { getDownloadURL, ref, listAll } from 'firebase/storage';
import { firebaseStorage } from '../../firebase.config';
@Injectable({
  providedIn: 'root',
})
export class FirebaseStorageService {
  getImageUrl(imagePath: string): Promise<string> {
    const storageRef = ref(firebaseStorage, imagePath);
    return getDownloadURL(storageRef);
  }

  getAllImages(folderPath: string): Promise<string[]> {
    const storageRef = ref(firebaseStorage, folderPath);
    return listAll(storageRef).then((res) => {
      return Promise.all(res.items.map((itemRef) => getDownloadURL(itemRef)));
    });
  }
}
