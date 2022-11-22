const axios = require('axios')

class ApiService {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://api.fbi.gov/wanted/v1/list'
        })
    }

    getAllCriminals = () => {
        return this.axiosApp.get('/wanted/api')
    }

    getOneCriminal = () => {
        return this.axiosApp.get(`/wanted/api/${ciminalId}`)
    }
}

module.exports = ApiService