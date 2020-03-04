import { Component, OnInit } from '@angular/core';

import { OwnerService } from '../shared/owner/owner.service';

@Component({
  selector: "app-owner-list",
  templateUrl: "./owner-list.component.html",
  styleUrls: ["./owner-list.component.css"]
})
export class OwnerListComponent implements OnInit {
  owners = [];
  constructor(private ownerService: OwnerService) {}

  ngOnInit() {
    this.ownerService.getAll().subscribe(data => {
      this.owners = data._embedded.owners;
      this.owners = this.addId();
    });
  }

  addId() {
    return this.owners.map(
      owner => owner = { ...owner, id: this.getId(owner._links) }
    );
  }

  private getId(links): string {
    if (links && links.self && links.self.href) {
      return links.self.href.slice(-2);
    }
    return '';
  }
}
