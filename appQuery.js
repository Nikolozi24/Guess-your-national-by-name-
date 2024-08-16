const express  = require ('express');
const app = express();
const {persons} = require('./persons.js')
app.get('/', (req,res)=>{
console.log(req.query)
res.send('<h1>Home Page</h1> <a href = "/api/products"> persons Data </a> <a href="/api/v1/query">Query</a>')

})
app.get('/api/products', (req, res)=>{
    
    res.status(200).json(persons);

} )
app.get('/api/v1/query' , (req, res)=>{
    console.log(req.query);
    const {search , limit} = req.query;
    let sortedProducts = [...persons];
    if(search){
            sortedProducts = sortedProducts.filter((product)=>{
                return product.username.startsWith(search);
    })
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    }
    res.status(200).json(sortedProducts)
})
app.get('/api/products/:id', (req, res)=>{
    const singleProduct = persons.find((person)=>person.id ===Number(req.params.id))
    if(singleProduct===undefined){
        res.status(404).send(`Product don't exists!`)
    }
    res.status(200).json(singleProduct);
} )


app.listen(5000, ()=>{
    console.log("port is listen 3001")
})