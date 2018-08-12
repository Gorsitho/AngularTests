import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {

       component.leyenda='Progreso de carga';

       fixture.detectChanges();// Dispirar la deteccion de cambios, la cual en el angular normal lo hace automaticamente.
       const elem: HTMLElement=fixture.debugElement.query(By.css('h3')).nativeElement; // Llama al primer h3 del html

       expect(elem.innerHTML).toContain('Progreso de carga'); // Evalua su contenido interno.
    });


    it('Debe de mostrar en el input el valor del progreso', () => {

        component.cambiarValor(5);
 
        fixture.detectChanges();// Dispirar la deteccion de cambios, la cual en el angular normal lo hace automaticamente.
        
        fixture.whenStable().then( ()=>{


            const input:HTMLInputElement=fixture.debugElement.query(By.css('input')).nativeElement; // Llama al primer h3 del html
     
            expect(input.value).toBe('55'); // Evalua el valor del input.

        });
        
        
     });


     it('Debe de incrementar/decrementar en 5, con un click en el boton', () => {

        fixture.detectChanges();// Dispirar la deteccion de cambios, la cual en el angular normal lo hace automaticamente.
        
        fixture.whenStable().then( ()=>{


            const botones=fixture.debugElement.queryAll(By.css('.btn-primary')); // Llama al primer h3 del html
             
            botones[0].triggerEventHandler('click',null); // Decrementa simula
            expect(component.progreso).toBe(45);


            botones[1].triggerEventHandler('click',null); // Incrementa simula
            expect(component.progreso).toBe(50);
        });
        
        
     });


     it('En el titulo del componente, debe mostrar el progreso',()=>{
        const botones=fixture.debugElement.queryAll(By.css('.btn-primary')); // Llama al primer h3 del html
             
        botones[0].triggerEventHandler('click',null); // Decrementa simula
    
        fixture.detectChanges();// Dispirar la deteccion de cambios, la cual en el angular normal lo hace automaticamente.
        
        fixture.whenStable().then( ()=>{

            const elem: HTMLElement=fixture.debugElement.query(By.css('h3')).nativeElement; // Llama al primer h3 del html

            expect(elem.innerHTML).toContain('45'); // Evalua su contenido interno.
          


        });


     });
});
