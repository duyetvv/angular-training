import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  log(msg: any): void {
    console.log('Training app >>', msg);
  }

  error(msg: any): void {
    console.error('Training app >> Error >>', msg);
  }

  warn(msg: any): void {
    console.warn('Training app >> Warn >>', msg)
  }
}
