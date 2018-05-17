import { Profile } from './profile';

export class Article {
  slug: string = '';
  title: string = 'title';
  description: string = '';
  body: string = '';
  tagList: Array<string> = [];
  createdAt: string = '';
  updatedAt: string = '';
  favorited: boolean;
  favoritesCount: number;
  author: Profile;
}
