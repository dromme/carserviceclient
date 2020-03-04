import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { OwnerService } from '../shared/owner/owner.service';
import { CarService } from '../shared/car/car.service';

@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.css']
})
export class OwnerEditComponent implements OnInit{

  owner: any = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ownerService: OwnerService,
    private carService: CarService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const dni = params.dni;
      if (dni) {
        this.ownerService.get(dni).subscribe((owner: any) => {
          if (owner) {
            this.owner = owner;
            this.owner.href = owner._links.self.href;
          } else {
            console.log(`Owner with dni '${dni}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }


  gotoList() {
    this.router.navigate(['/owner-list']);
  }

  save(form: NgForm) {
    this.ownerService.save(form).subscribe(
      result => {
        this.gotoList();
      },
      error => console.error(error)
    );
  }

  remove(href) {
    this.carService.removeAssociation(this.owner.dni);
    this.ownerService.remove(href).subscribe(
      result => {
        this.gotoList();
      },
      error => console.error(error)
    );
  }


}
