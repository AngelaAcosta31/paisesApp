import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: []
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter: EventEmitter<string>= new EventEmitter();

  /**para ell autocompletado del buscar */
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino:string = '';

  ngOnInit(){
    this.debouncer
     .pipe(debounceTime(300))
     .subscribe(valor => {
       this.onEnter.emit(valor);
     });
  }

  buscar(){
    this.onEnter.emit(this.termino);

  }

  teclaPresionada(){

    this.debouncer.next(this.termino);
  }

}

