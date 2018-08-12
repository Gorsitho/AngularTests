


import {TestBed,ComponentFixture} from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';


describe('Medico component',()=>{

    let component:MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(()=>{

        TestBed.configureTestingModule({  //Modulo
            declarations:[MedicoComponent],
            providers:[MedicoService],
            imports:[HttpClientModule]
        });


        fixture=TestBed.createComponent(MedicoComponent); // Acceso al html, ciclo de detencion de cambios , obtener cualquier elemento del html..etc
        component=fixture.componentInstance; // De esta manera puedo utlizar todos sus metodos y funciones.
    });

    it('Debe de crearse el componente ',()=>{

        expect(component).toBeTruthy();

    });
    it('Debe de retornar el nombre del medico ',()=>{

        const nombre = 'Daniel';
        const res = component.saludarMedico(nombre);
        expect(res).toContain(nombre);

    });



});