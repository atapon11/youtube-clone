import axios from "axios";
export const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
    params:{
        maxResults:50,
    },
    headers: {
        'X-RapidAPI-Key': "18059df571mshf7392bd27cd381ap19807fjsndfad14dc09f9",
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      },
    };

    export const fetchFromAPI = async (url) =>{
        const {data} = await axios.get(`${BASE_URL}/${url}`, options);
        return data;
    }