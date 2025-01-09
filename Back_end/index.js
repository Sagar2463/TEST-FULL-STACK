import express from "express";
const app = express()
const port = process.env.PORT||3000

app.use(express.static('dist'))
/*app.get('/',(req,res)=>{
    res.send("Hello World");
})*/
app.get('/api/jokes',(req,res)=>{
   const jokes = [
        {
            "id": 1,
            "title": "Tech Humor",
            "content": "Why did the programmer go broke? Because he used up all his cache!"
        },
        {
            "id": 2,
            "title": "Math Fun",
            "content": "Parallel lines have so much in common. It’s a shame they’ll never meet."
        },
        {
            "id": 3,
            "title": "Music Giggle",
            "content": "Why did the musician get kicked out of the band? He kept playing notes that were a little flat."
        },
        {
            "id": 4,
            "title": "Animal Laughs",
            "content": "Why don’t skeletons fight each other? They don’t have the guts."
        },
        {
            "id": 5,
            "title": "Food Chuckle",
            "content": "What do you call cheese that isn't yours? Nacho cheese!"
        }
    ]
    res.json(jokes)
    
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
    })