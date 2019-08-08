import {Component, OnInit} from '@angular/core';
import {BackendapiService} from '../backendapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  books: any;

  constructor(private bookservice: BackendapiService) {
  }

  ngOnInit() {
    this.bookservice.getList().subscribe(result => {
      this.books = result;
    });
  }

}
