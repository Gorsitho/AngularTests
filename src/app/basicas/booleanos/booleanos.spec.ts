
import { usuarioIngresado } from './booleanos';


describe('Prueba de booleanos',()=>{

    it('Debe regresar un true',()=>{


       const res= usuarioIngresado();

       expect(res).toBeTruthy();
      // expect(res).not.toBeTruthy();
      // expect(res).toBeFalsy();
    });



});