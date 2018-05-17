import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../services/article.service';
import { Article } from '../../../models';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public articles: Article[] = [];

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    const path = this.route.snapshot.routeConfig.path;

    this.route.parent.params.subscribe(({ username }) => {
      this.articleService.getArticles({ author: username })
        .subscribe(data => {
          this.articles = data.articles
        });
    });
  }

}
