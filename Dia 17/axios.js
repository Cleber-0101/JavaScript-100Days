//Pegando dados de uma API externa 
const getData = async() => {
    try {
        const respostaDaAPI = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(respostaDaAPI)
    } catch (error) {
        console.log(error)
    }
}

getData()

// é uma função asyncrona 