import express from 'express'
import type { Request, Response } from 'express'
import nunjucks from 'nunjucks'
import fruitsData from './data/fruits.json'

const app = express();
const port = process.env.PORT || 3000

nunjucks.configure('src/templates', {
    autoescape: true,
    express: app
})

app.get('/', (req: Request, res: Response) => {
    res.render('home.html', {
        title: "Express & Nunjucks Application"
    })
})
app.get('/about', (req: Request, res: Response) => {
    res.render('about.html', {
        title: "About Nunchacks"
    })

})

app.get('/fruits', (req: Request, res: Response) => {
    res.render('fruits.html', {
        title: "List of fruits",
        fruitsData
    })

})

app.listen(port, () => {
    console.log(`Express app powereb by Nunchack listerning on port ${port}`)
})