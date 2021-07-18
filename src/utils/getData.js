const BASEURL = "https://pokeapi.co/api/v2/"
const LIMIT = 30

export const getPokemonByName = async(name) => {
    try {   
        const data = await fetch(`${ BASEURL }pokemon/${ name }`)
        const response = await data.json()
        if(!response.ok === '200') {
            return new Error('Error GetDataByName')
        }
        return response
    } catch (error) {
        return error
    }
}

export const getPokemons = async(page) => {
        try {
            const data = await fetch(`${ BASEURL }pokemon?limit=${ LIMIT }&offset=${ page * LIMIT}`)
            const response = await data.json()
            if(!response.ok === '200') {
                return new Error('Error GetData')
            }
            return response
        } catch (error) {
            return error
        }
}
