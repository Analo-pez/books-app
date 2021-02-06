import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../models/book.model';
import { ApiBooksService } from '../../services/api-books.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {

  book: Book;


  constructor(private bookService: ApiBooksService,
    private router: ActivatedRoute) { 



      
    }

  ngOnInit() {}

}
