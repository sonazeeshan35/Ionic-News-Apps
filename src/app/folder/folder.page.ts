import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsapiService } from '../services/newsapi.service';
import { ArticlesEntity } from '../Interfaces/News-response';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  newsList!: ArticlesEntity[];
 
  constructor( private activatedRoute = inject(ActivatedRoute),
  private newsapiservice: NewsapiService) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id')as string;
    this.getTopHeadlines();
  }
  getTopHeadlines(){
    this.newsapiservice.getTopCountryHeadLineslines('IE',this.folder)
    .pipe(map((res) => res.articles))
    .subscribe((news) => (this.newsList));
  }
}
