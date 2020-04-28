import { Component, OnInit, TemplateRef } from '@angular/core';
import { GalleryService } from './gallery.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

export class Dogs {
  public message: [];
  public status: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public image: Dogs;
  contentArray: any;
  returnedArray: any;

  modalRef: BsModalRef;

  constructor(public galleryService: GalleryService, private modalService: BsModalService) { }

  ngOnInit() {
    this.getImages();
  }

  getImages() {
    this.galleryService.getImages().subscribe((data) => {
      console.log(data);
      this.image = data;
      this.updatePage();


    })
  }

  updatePage( ){
    this.returnedArray = this.image.message.slice(0, 10);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.image.message.slice(startItem, endItem);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
