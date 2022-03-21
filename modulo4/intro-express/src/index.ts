import express from 'express'
import cors from 'cors'
import { users, posts } from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {console.log('Servidor On na Porta 3003')})


type User = {id: number, name: string, phone: string, email: string, website: string}
type Post = {id: number, userId: number, title: string, body: string}

app.get('/users', (req, res) => {
    res.status(200).send(users)
})

app.get('/posts', (req, res) => {
    res.status(200).send(posts)
})

app.get('/posts/:id', (req, res) => {
    const userId = Number(req.params.id)

    if (!userId) {res.status(400).send('Erro, falta id do usuário')}

    const userPosts: Post[] = posts.filter(post => {
        if (post.userId === userId) {return post}
    })

    res.status(200).send(userPosts)
})

app.delete('/posts/:postId', (req, res) => {
    const postId = Number(req.params.postId)

    if (!postId) {res.status(400).send('Erro, falta id do post')}

    const newPosts: Post[] = posts.filter(post => {
        if (post.id !== postId) {return post}
    })

    res.status(200).send(newPosts)
})

app.delete('/users/:id', (req, res) => {
    const userIdDelete = Number(req.params.id)

    if (!userIdDelete) {res.status(400).send('Erro, falta id do usuário')}

    const newUsersArray: User[] = users.filter(user => {
        if (user.id !== userIdDelete) {return user}
    })

    res.status(200).send(newUsersArray)
   
})