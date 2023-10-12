import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environments } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class CryptoService {

  key = CryptoJS.enc.Utf8.parse(environments.keyCrypto);
  iv = CryptoJS.enc.Utf8.parse(environments.ivCrypto);

  constructor() { }


   encryption(passw: string): string {
    const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(passw),this.key,
    {
      keysize: 128,
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

      return encrypted.toString();
   }

   decryption(passwEncrypted: string): string {
    const decrypted = CryptoJS.AES.decrypt(passwEncrypted,this.key,
    {
      keysize: 128/8,
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

      return decrypted.toString(CryptoJS.enc.Utf8);
   }


}
