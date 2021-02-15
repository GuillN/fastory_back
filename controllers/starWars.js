const axios = require('axios')

exports.getAllResources = async (category, page) => {
    const request = await axios.get(`https://swapi.dev/api/${category}/?page=${page}`)
    return {status: 200, data: request.data.results}
}

exports.getOneResource = async (category, id) => {
    const request  = await axios.get(`http://swapi.dev/api/${category}/${id}`)
    return {status: 200, data: request.data}
}

exports.getByName = async (category, search) => {
    const request = await axios.get(`https://swapi.dev/api/${category}/?search=${search}`)
    return {status: 200, data: request.data}
}
