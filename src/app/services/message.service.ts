import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  private messages: string[] = [];

  constructor() { }

  add (message: string): void {
    this.messages.push(message);
  }

  clear (): void {
    this.messages.length = 0;
  }

  getMessages (): string[] {
    return this.messages;
  }
}
