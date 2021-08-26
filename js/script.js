let arrSurname = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
const newSurname=prompt('Inserisci il tuo congome');
arrSurname.push(newSurname)
console.log(arrSurname.sort());
let k=0;
for (let i=0; i<arrSurname.length; i++){
    if(newSurname == arrSurname[i]){
        k = i;
    }
}
console.log('il tuo cognome si trova alla posizione ' + (k + 1) + ' della lista');