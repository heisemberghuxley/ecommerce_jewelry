import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

    @Input()
    public placeholder: string = '';

    @Input()
    public initialValue: string = '';

    @Output()
    public onDebounce = new EventEmitter<string>();




    ngOnInit(): void {
      this.debouncerSuscription = this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe( value => {
        this.onDebounce.emit( value );
        // console.log('debounce value', value)
      })
    }


    ngOnDestroy(): void {
        this.debouncerSuscription?.unsubscribe();
    }




    onKeyPress( searchTerm: string) {
      this.debouncer.next( searchTerm)
    }

}


