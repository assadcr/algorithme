// un commentaire en javascript

/*
        un commentaire multilingue
        en javascript


/* --------------------------Affichage------------------- */
// afficher des informations dans la co,sole de debbugage du navigateur
console.log ('hello,world');
// afficher une boite de dialogue avec champ a remplir
//let reponse = prompt('quel est votre age?');
//console.log (response);
/* --------------------------Les variables------------------- */
// declarer d'une variable la declarer une fois
let uneVariable;

// affectation d'une variable
uneVariable = ' Je suis une variable'

console.log(uneVariable)
// les 2 se font généralement en meme temps, les variables sont sensible a la case 
let helloWorld = 'hello,World!';
uneVariable = ' je suis une nouvelle variable!';


console.log(helloWorld);

 // les differents type de variables

 let messages = 'un message'
 let number = 20
 let décimal = 20.5
 let boolean = true;
 let boolean2 = false;

 // Les opérations arithétiques (+, -, *, /)
 // declarer 3 variables sum, number,number2
 //affecter le nombre 10 a number1
 //affecter le nombre 20 a number 2
 //affecter a sum l'operation de multiplication des 2 varaibles précédentes
// afficher le resultat en console
 let sum
 let number1 = 10
 let number2 = 20
 sum = number1 * number2
 //console.log(sun);
/*----------------------(------------------la concatenation------------------------------------------------ */

let firstName = 'Assa'
let lastName = 'DOUCOURE'

// je m'appelle Firstname

console.log("Je m'appelle " + firstName + ' ' + lastName);

// déclarer une variable city , afficher le message j'adore vivre a Paris

let city = 'PARIS'
city = "PARIS"
city = "PARIS"

console.log ("j'adore vivre a " + city)
// modifier le message pour afficher j'adore vivre a <city> et je m'appelle
{/* <firstName> <lastName></lastName> */}


//------------------------------------  informationsnstructions conditionnelles------------- */

// demander a l'utulisateur s'il accepte les cgv condition général de vente


//let agree = prompt ("Accepter-vous les cgv?");
// si ,sinon ( if,else)
       //if (agree =='ok') {
        //console.log ('vous avez accepter les conditions');
      //  } else {
                console.log (" vous n'avez pâs accepter les conditions!");
       // }
        // si,si non si ,sinon
        // si il repond yes//vous etes redirigé vers le site en anglais
        //sinon si il repond oui
        //vous etes redirigé vers le site en francais
        //sinon si il repond dans// vous etes redirigéé vers le site en russe
        //sinon
        // vous etes rédigigé vers le site en russe
        // vous ne pouvez acceder au site
       // if(agree == 'yes'){
        console.log("vous etes redigérer sur le site en anglais");

        //}else if( agree == "oui"  ){
        console.log ("vous etes redirigé vers le site en francais");
      // }else if (agree == 'da'){
        console.log ( 'vous etes redirigé vers le site en russe');

       //}else{
        console.log ('vous ne pouvez acceder au site');
      // }
//console.log ( "la suite...");


 //------------------- les operateurs de comparaison-----------------*/
 // ==,>;<=;<},!=,===
 // déclarer une variable qui s'appelle variable lui assigner la valeur 16
 // si la variable est égale a 16 afficher felicitations

 //let variable = 16
 //if (variable == 16)//{
        console.log ('droit de conduire');          
 //}
 //let age = prompt('quel est ton age');
 //let pays = prompt ('quelle est votre nationalité');

 //if(
        //nationalté =='francais'&& age >= 18 ||
       // nationalité != 'francais'
       // ) {
       
       
       
        //console.log ('vous avez le droit a une assitance juridique');
 //}
let nationalité = prompt ('quelle est votre nationalité');
console.log (nationalité);
  //if (nat == 'francais') {
     let age = prompt ('quel est votre age?');
     if (age >=18) {
        console.log ('vous avez droit aux APL');
     }   
//} else {
        console.log ("vous n'avez aucun droit");


//}


/*--------------------les boucles-------------------- */

// les boucles sont des structures permettant d'excuter plusieurs fois des instructions
// boucle a itération définies (while)
let i =0
while (1 <10){
        let res= i * 7;
   console.log (' $(i)*7 = ${res}');
   i = i + i;
}

// afficher la table de multiplication de 7

 