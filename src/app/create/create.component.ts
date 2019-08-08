import {Component, OnInit} from '@angular/core';
import {BackendapiService} from '../backendapi.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  idBook: number;
  title: string;
  author: string;
  description: string;

  constructor(public bookservice: BackendapiService,
              private router: Router) {
  }

  ngOnInit() {
  }

  create(createForm: HTMLFormElement) {
    this.idBook = createForm.idBook.value;
    this.title = createForm.titleBook.value;
    this.author = createForm.author.value;
    this.description = createForm.description.value;
    this.bookservice.addCustomer(this.idBook, this.title, this.author, this.description).subscribe(result => {
      this.router.navigate(['']);
    });
  }
}
