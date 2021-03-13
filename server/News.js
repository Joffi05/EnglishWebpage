const apiKey="0a317e68b6f04a00b363f018d435c100";
let Topic="Bitcoins";
let url='https://newsapi.org/v2/everything?q='+Topic+'&apiKey='+apiKey;

fetch(url).then(res=>{
    return res.json()
}).then((data)=>{
    console.log(data);
})