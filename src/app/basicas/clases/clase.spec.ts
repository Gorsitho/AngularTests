import { Jugador } from './clase';
describe('Prueba de clase',()=>{
    let jugador = new Jugador();

   
    
    beforeAll(()=>{ //Se ejecuta una vez antes de todas las pruebas.

        //console.log('beforeAll');

    });
    beforeEach(()=>{ // Se ejecuta antes de cada prueba.

        //console.log('beforeEach');
        jugador = new Jugador();
    });
    afterAll(()=>{//Se ejecuta una vez despues de todas las pruebas.

        //console.log('afterAll');
        
    });
    afterEach(()=>{ // Se ejecuta despues de cada prueba.

       // console.log('afterEach');
        
    });
    
   


    it('Debe retornar 80 de hp, si recibe 20 de daño',()=>{


       //const jugador = new Jugador();
       const res = jugador.recibeDanio(20);


        expect(res).toBe(80);
    });



    it('Debe retornar 50 de hp, si recibe 50 de daño',()=>{


        //const jugador = new Jugador();
        const res = jugador.recibeDanio(50);
 
 
         expect(res).toBe(50);
     });
     it('Debe retornar 0 de hp, si recibe 100 de daño o mas',()=>{


        //const jugador = new Jugador();
        const res = jugador.recibeDanio(120);
 
 
         expect(res).toBe(0);
     });


});
   

