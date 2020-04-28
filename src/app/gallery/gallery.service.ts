import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dogs } from './gallery.component';

@Injectable({providedIn: 'root'})
export class GalleryService {

  private url = 'https://dog.ceo/api/breed/hound/images';
  constructor(private httpClient: HttpClient) { }

  public getImages() {
    return this.httpClient.get<Dogs>(this.url);
  }



}
