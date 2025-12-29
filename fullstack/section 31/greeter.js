const args = process.argv.slice(2)
console.log(args)

for(arg of args){
  console.log(`HELLO THERE, ${arg}`)
}