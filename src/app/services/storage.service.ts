import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {
  constructor() {}

  setItem(name: string, data: any) {
    localStorage.setItem(name, JSON.stringify(data));
  }

  getItem(name: string) {
    let data = localStorage.getItem(name);
    return JSON.parse(data);
  }

  clearItem(name: string) {
    localStorage.removeItem(name);
  }

  clearAll() {
    localStorage.clear();
  }
}
