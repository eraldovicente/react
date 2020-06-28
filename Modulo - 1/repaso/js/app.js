// crear variables

// Variables con var
// var aprendiendo = true;

// aprendiendo = 'JavaScript';

// console.log(aprendiendo);

// variables con const

// const aprendiendo = 'JavaScript';
// aprendiendo = true;

// console.log(aprendiendo);

// Variables con let

// let aprendiendo = 'JavaScript';
// aprendiendo = true;

// console.log(aprendiendo);

// Scope

// var musica = 'Rock';

// if (musica) {
//      var musica = 'Grunge';
//      console.log('dentro del if: ', musica);
// }
// console.log('Fuera del IF', musica);

// Scope con let

// let musica = 'Rock';

// if (musica) {
//      let musica = 'Grunge';
//      console.log('dentro del if: ', musica);
// }
// console.log('Fuera del IF', musica);

const musica = 'Rock';

if (musica) {
     const musica = 'Grunge';
     console.log('dentro del if: ', musica);
}
console.log('Fuera del IF', musica);