import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async(url) => {
    const {data} =await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'c32c3fd84dmsh9973418d849e2e8p1f5305jsnd76dd4c692f5'
        }
    })
    return data;
}