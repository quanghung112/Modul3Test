import { Component, OnInit } from '@angular/core';
import {BackendapiService} from '../backendapi.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id: any;
  book: any;

  constructor(private bookservice: BackendapiService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      this.bookservice.detail(this.id).subscribe(result => {
        this.book = result;
      });
    });
  }

}
