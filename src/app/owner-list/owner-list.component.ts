import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { CarService } from "../shared/car/car.service";
import { OwnerService } from "../shared/owner/owner.service";

@Component({
  selector: "app-owner-list",
  templateUrl: "./owner-list.component.html",
  styleUrls: ["./owner-list.component.css"]
})
export class OwnerListComponent implements OnInit {
  owners = [];
  constructor(
    private router: Router,
    private ownerService: OwnerService,
    private carService: CarService
  ) {}

  ngOnInit() {
    this.ownerService.getAll().subscribe(data => {
      this.owners = data._embedded.owners;
      this.owners = this.addId();
    });
  }

  addId() {
    return this.owners.map(
      owner =>
        (owner = {
          ...owner,
          id: this.getId(owner._links),
          href: owner._links.self.href
        })
    );
  }

  private getId(links): string {
    if (links && links.self && links.self.href) {
      return links.self.href.split('owners/')[1];
    }
    return "";
  }

  deleteMany(selecteds: any[]) {
    selecteds.forEach(owner => {
      this.carService.removeAssociation(owner.value.dni);
      this.ownerService.remove(owner.value.href).subscribe(
        result => {},
        error => console.error(error)
      );
    });
    setTimeout(() => {
      window.location.reload();
    }, 4000);
  }
}
