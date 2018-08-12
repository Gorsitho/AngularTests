import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {

        componente= new MedicosComponent(servicio);
        
    });


    it('Init: Debe cargar los medicos', () => {

        spyOn(servicio,'getMedicos').and.callFake(()=>{ // Espia el servicio, y cuando se llame el metodo getmMedicos hace un respuesta false.


            return Observable.from(['medico1','medico2','medico3']);

        });


        componente.ngOnInit();

        expect(componente.medicos.length).toBeGreaterThan(0);

   
    });
    it('Debe de llamar al servidor para agregar a un medico', () => {
        const espia= spyOn(servicio,'agregarMedico').and.callFake((medico)=>{ // Espia el servicio, y cuando se llame el metodo getmMedicos hace un respuesta false.


            return Observable.empty(); // No interesa la resputa, por eso regresa un observable vacio.

        }); 
        componente.agregarMedico(); // Llama al agregarMedico del componente y por cual llama al agregarMedico del servicio.

        expect(espia).toHaveBeenCalled(); // Verifica si agregarMedico ha sido llamado.

   
    });


    it('Debe de agregar un nuevo medico al arreglo de medicos', () => {
       
        const medico={

            id: 1,
            nombre:'Juan'

        };

        spyOn(servicio,'agregarMedico').and.returnValue(Observable.from([medico])); // retorna el valor asignado.
        componente.agregarMedico();

        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0); // indexOf(medico)-> regresa el indice del objeto, si no esta es -1

    });


    it('Si falla la adicion, la propiedad mensajeError, debe ser igual al error del servicio.', () => {
       
        const miError='No se pudo agregar al medico';

        spyOn(servicio,'agregarMedico').and.returnValue(Observable.throw(miError)); // retorna el valor asignado del error.
        componente.agregarMedico();

        expect(componente.mensajeError).toBe(miError); 

    });


    
    it('Debe de llamar al servidor para borrar un medico', () => {
       
       spyOn(window,'confirm').and.returnValue(true); // Simula la confirmacion del modal.(aceptar)
        const espia= spyOn(servicio,'borrarMedico').and.returnValue(Observable.empty()); 
        componente.borrarMedico('1');

        expect(espia).toHaveBeenCalledWith('1');

    });


    it('No debe de llamar al servidor para borrar un medico', () => {
       
        spyOn(window,'confirm').and.returnValue(false); // Simula la cancelacion del modal.(cancelar)
         const espia= spyOn(servicio,'borrarMedico').and.returnValue(Observable.empty()); 
         componente.borrarMedico('1');
 
         expect(espia).not.toHaveBeenCalledWith('1'); // not<- Niega el metodo.
 
     });

});
