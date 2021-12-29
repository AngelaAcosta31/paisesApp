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
    /**
     * debouncer para emitir el valor o el
     * resultado de la busqueda despues de un
     *  tiempo determinado despues de que la
     * persona dejo de escribir
     */
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

