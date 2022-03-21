import express, { Request, Response } from 'express'
import cors from 'cors'
import { tasks } from './data'


const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => { console.log('Servidor on na porta 3003') })

app.get('/tasks', (req: Request, res: Response) => {
    const userId = Number(req.query.id)

    if (!userId || userId === null || userId === undefined) { res.status(400).send('Id não informado') }

    const filteredTasks = tasks.filter(task => { if (task.userId === userId) {return task} })
    console.log(filteredTasks)

    res.status(200).send(filteredTasks)
})

app.get('/tasks/:status', (req: Request, res: Response) => {
    let status = false
    if (!req.params) { res.status(400).send('Nenhum param informado') }
    if (!req.params.status) { res.status(400).send('Falta informar o status no params') }
    if (req.params.status !== 'true' && req.params.status !== 'false') { res.status(400).send('Status informado inválido. Apenas true ou false') }
    if (req.params.status === 'true') { status = true }

    const tasksByStatus = tasks.filter(task => { if (task.completed === status) return task })

    res.status(200).send(tasksByStatus)
})

app.post('/tasks', (req: Request, res: Response) => {
    const id = Date.now()
    const userId = Number(req.headers.authorization)
    const { title, completed } = req.body

    const newTask = {
        userId: userId,
        id: id,
        title: title,
        completed: completed
    }

    tasks.push(newTask)

    res.status(200).send(tasks)
})

app.put('/tasks', (req: Request, res: Response) => {
    const id = Number(req.query.id)

    if (!id || id === null || id === undefined) { res.status(400).send('Erro, id não informado') }

    tasks.forEach(task => {
        if (task.id === id) {
            task.completed = !task.completed
        }
    })

    const updatedTask = tasks.filter(task => { if (task.id === id) { return task } })

    res.status(200).send(updatedTask)
})

app.delete('/tasks/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id)

    if (!id || id === null || id === undefined) { res.status(400).send('Erro, id não informado') }

    const taskIndex = tasks.map(task => { return task.id }).indexOf(id)

    tasks.splice(taskIndex, 1)

    res.status(200).send(tasks)
})

