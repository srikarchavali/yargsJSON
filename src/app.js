
let fs = require('fs')
const { title } = require('process')

exports.add =(title,actor)=>{
    let Movie = {
        movie: title,
        actor: actor
    }
    fs.writeFileSync('./netflix.json', str)
}