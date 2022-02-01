
let fs = require('fs')
const { title } = require('process')

exports.add =(title,actor)=>{
    let Movie = {
        movie: title,
        actor: actor
    }
    let str = JSON.stringify(Movie)

    fs.writeFileSync('./netflix.json', str)
}