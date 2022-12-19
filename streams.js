// const { writeFile } = require('fs/promises')
// const createBigFile = async () => await writeFile('./data/bigFile.txt', 'hello world'.repeat(10000)); 
// createBigFile()

const { createReadStream } = require('fs')

const stream = createReadStream('./data/bigFile.txt', {
    encoding: 'utf-8'
})

stream.on('data', (chunk) =>{
    console.log(chunk)
})
stream.on('end', () => {
    console.log('end of file.')
})
stream.on('erro', (error) =>{
    console.log(error)
})