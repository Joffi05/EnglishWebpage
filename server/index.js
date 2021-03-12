const express = require("express")
const PORT = process.env.PORT || 3001
const app = express()




app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
});





//POST endpoints


// Create new Post
app.post('api/newPost', async (req, res) => {
  try {
    const post = {
      name: req.body['name'],
      date: req.body['date'],
      city: req.body['city'],
      text: req.body['text']
    }

    const newDoc = await db.collection(postCollection).add(post)
    res.status(201).send('Created new post!')
  }
  catch (err) {
    res.status(400).send(`Fill all fields!`)
    console.log(err)
  }
})



//GET endpoints


// Get all posts
app.get('api/posts', async (req, res) => {
  try {
    const allPosts = await db.collection(postCollection).get()

    res.status(200).json(allPosts)
  }
  catch (err) {
    res.status(500).send(err)
  }
})
