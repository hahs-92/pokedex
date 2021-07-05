const BASEURL = "https://pokeapi.co/api/v2/"
const LIMIT = 30

export const getDataByName = async(name) => {
    try {   
        const data = await fetch(`${ BASEURL }pokemon/${ name }`)
        const response = await data.json()
        return response
    } catch (error) {
        return new Error('Error GetDataByName')
    }
}

export const getData = async(page) => {
        try {
            const data = await fetch(`${ BASEURL }pokemon?limit=${ LIMIT }&offset=${ page * LIMIT}`)
            const response = await data.json()
            return response
        } catch (error) {
            console.log(error.message)
            return new Error('Error GetData')
        }
}
