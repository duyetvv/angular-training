import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-meta',
  templateUrl: './article-meta.component.html',
  styleUrls: ['./article-meta.component.css']
})
export class ArticleMetaComponent implements OnInit {

  @Input() article: Article;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

  toggleFavorite() {
    const { slug, favorited } = this.article;

    this.articleService.favoriteArticle(slug, !favorited).subscribe(data => {
      this.article = data.article
    })
  }

}
