//arrow function , ultilizado quando precisamos simplificar escrita de codigo

const testeArrowDunction = (a, b) => a + b
console.log(testeArrowDunction) 


const greeting = (name) => {
    if(name){
        return `Hello ${name}!`
    }else{
        return "Hello"
    }
};

console.log(greeting("Mateus"))
console.log(greeting())

//objeto
const user = {
    name: "cleber",
    sayUserName(){
        setTimeout(function (){
            console.log(this)
            console.log(`Username: ${this.name}`)
        }, 1000)
    }
}

user.sayUserName()
//0aace233