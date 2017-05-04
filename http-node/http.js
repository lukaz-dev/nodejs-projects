var router = require('./router');

var app = router(3412);

var operadoras = [
    {nome: 'Oi', codigo: 14, categoria: 'Celular', preco: 2},
    {nome: 'Vivo', codigo: 15, categoria: 'Celular', preco: 1.75},
    {nome: 'Tim', codigo: 41, categoria: 'Celular', preco: 3},
    {nome: 'GVT', codigo: 25, categoria: 'Fixo', preco: 1},
    {nome: 'Embratel', codigo: 21, categoria: 'Fixo', preco: 2.50}
];

var contatos = [
    {id: 1, nome: 'bruno da silva', telefone: '9999-2222', data: new Date(), operadora: operadoras[0]},
    {id: 2, nome: 'giovana dos santos', telefone: '9999-3333', data: new Date(), operadora: operadoras[1]},
    {id: 3, nome: 'mariana de oliveira', telefone: '9999-8888', data: new Date(), operadora: operadoras[2]}
];

app.interceptor(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.interceptor(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    next();
});

app.get('/operadoras', function (req, res) {
    res.write(JSON.stringify(operadoras));
    res.end();
});

app.get('/contatos', function (req, res) {
    res.write(JSON.stringify(contatos));
    res.end();
});

app.post('/contatos', function (req, res) {
    var contato = req.body;
    contatos.push(JSON.parse(contato));
    res.end();
});

app.options('/contatos', function (req, res) {
    res.end();
});
