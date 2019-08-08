import {Component, OnInit} from '@angular/core';
import {BackendapiService} from '../backendapi.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
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

  Delete() {
    if (confirm('ban co muon xoa?')) {
      this.bookservice.delete(this.id).subscribe(result => {
        this.router.navigate(['']);
      });
    }
  }
}
