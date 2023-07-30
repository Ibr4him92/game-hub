import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key : '502c6d753b564b5ab6da633687ba7287'
    }
})