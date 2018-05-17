import { Component, OnInit } from '@angular/core';
import { Article } from '../../models';
import { ArticleService } from '../../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  public article: any = {
    title: '',
    description: '',
    body: '',
    tagList: ['demo']
  };

  constructor(
    private router: Router,
    private articleService: ArticleService
  ) { }

  ngOnInit() { }

  submitForm() {
    this.articleService.createArticle(this.article).subscribe(data => {
      this.router.navigate(['/']);
    });
  }

  addTag(evt) {
    const { tagList: oldList } = this.article;
    const { value } = evt.target;

    this.article.tagList = Array.from(new Set(oldList.concat(value.split(','))));
    evt.target.value = '';
  }

  removeTag(tag) {
    const { tagList } = this.article;
    const idx = tagList.indexOf(tag);

    (idx > -1) && this.article.tagList.splice(idx, 1);
  }

}
