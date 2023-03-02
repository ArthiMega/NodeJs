const path = require('path')
const fs = require('fs')
const { dir } = require('console')
const notes = 'folder/hello.txt'

console.log(path.dirname(notes))
console.log(path.basename(notes))
console.log(path.extname(notes))
console.log(path.resolve('folder/hello.txt'))
console.log(path.normalize('/home/asplap3268/../NodeJs/folder/hello.txt'))

// =============> Writing files <===============

const content = 'Hi arthi ma enna panra u are a rock stor'
fs.writeFile('folder/helloo.txt', content,{flag:'w+'}, err => {
    if (err) {
        console.error(err);
        return
    }
    console.log("Content writtened Successfully!")
})

try {
    fs.writeFileSync('folder/hello.txt', content)
    console.log("Written sucessfully!")
}
catch (err) {
    console.error(err);
}

fs.appendFile('folder/hello.txt', content, err => {
    if (err) {
        console.error(err);
    }
    console.log('content appended successfully!')
})
fs.rename('folder/hello.txt', 'folder/hi.txt', err=>{
    if(err){
        console.error(err);
        return
    }
    console.log("renamed successfully!")
})

fs.rmdir(dir,{recursive:true},(err)=>{
    if(err){
        throw err;
    }
    console.log(`${dir} is deleted`)
})
fs.rmdir(dir, {recursive:true},(err)=>{
    if(err){
        throw err;
    }
    console.log(`${dir} is removed successfully`)
})