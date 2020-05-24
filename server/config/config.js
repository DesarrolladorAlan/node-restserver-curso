// ========================
// Puerto
// ========================
process.env.PORT = process.env.PORT || 3000;


// ========================
// Entorno
// ========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ========================
// Base de Datos
// ========================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    // mongodb+srv://destroyer:<password>@cluster0-pvnkv.mongodb.net/test?retryWrites=true&w=majority
    urlDB = 'mongodb+srv://destroyer:8rS8wp5KQGmEcWfJ@cluster0-pvnkv.mongodb.net/cafe?retryWrites=true&w=majority';
    // urlDB = 'mongodb+srv://destroyer:8rS8wp5KQGmEcWfJ@cluster0-pvnkv.mongodb.net/cafe';
}

process.env.URLDB = urlDB;