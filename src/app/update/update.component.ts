import { Component, OnInit } from '@angular/core';
import {BackendapiService} from '../backendapi.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  id: any;
  title: string;
  author: string;
  description: string;
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
  update(updateForm: HTMLFormElement) {
    this.title = updateForm.titleBook.value;
    this.author = updateForm.author.value;
    this.description = updateForm.description.value;
    this.bookservice.update(this.id, this.title, this.author, this.description).subscribe(result => {
      this.router.navigate(['']);
    });
  }
}
