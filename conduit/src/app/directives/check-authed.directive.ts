import { 
  Directive, 
  Input, 
  OnInit, 
  TemplateRef, 
  ViewContainerRef 
} from '@angular/core';

import { UserService } from '../services/user.service';

@Directive({
  selector: '[appCheckAuthed]'
})
export class CheckAuthedDirective implements OnInit{
  private condition: boolean = false;
  
  @Input() set appCheckAuthed(condition: boolean) { 
    this.condition = condition 
  }
  
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userService: UserService
  ) { }
  
  ngOnInit(): void {
    this.userService.isAuthenticated.subscribe(isAuthed => {
      if (isAuthed && this.condition || !isAuthed && !this.condition) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    })
  }

}
