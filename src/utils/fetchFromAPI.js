import axios from "axios";
export const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
    params:{
        maxResults:50,
    },
    headers: {
        'X-RapidAPI-Key': "32de89f940msh52f6d0c70694335p1c1bf6jsnbaa98fa5b302",
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      },
    };

    export const fetchFromAPI = async (url) =>{
        const {data} = await axios.get(`${BASE_URL}/${url}`, options);
        return data;
    }