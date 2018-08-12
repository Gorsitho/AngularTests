
import { obtenerRobots } from './arreglos';


xdescribe('Prueba de arreglos',()=>{ // con la x ignora la prueba, tambiene puede ser asignado a los it.

    it('Debe retornar al menos 3 robots',()=>{


       const res= obtenerRobots();

       expect(res.length).toBeGreaterThanOrEqual(3);

    });

    it('Debe de existir megaman y ultron',()=>{


        const res= obtenerRobots();
 
        expect(res).toContain('Megaman');
        expect(res).toContain('Ultron');
     });
   



});