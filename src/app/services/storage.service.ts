import { Injectable } from '@angular/core';

const USER_KEY = 'user-logado';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  public set documento(value: string) {
    this.storage.setItem('documento', value);
  }

  public get documento() {
    return JSON.parse(localStorage.getItem('documento')!);
  }

  public getUser() {
    return JSON.parse(localStorage.usuario);
  }

  public setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  clear(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }
}
