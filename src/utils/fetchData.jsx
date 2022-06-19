import axios from 'axios';


export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '98cabe703fmsh5fa934d2d218867p1a426fjsn7a571311f556' 
    }
  };

 export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '98cabe703fmsh5fa934d2d218867p1a426fjsn7a571311f556'
    }
  };


export const fetchData = async (url, options) => {

        const response = await fetch(url, options);
        const data = await response.json();

        return data;

}


export const APIHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': {
        toString () {
            return `Bearer ${localStorage.getItem('token')}`
        }
    }
};

export const API = axios.create({
    baseURL: process.env.MONGO_DB,
    timeout: 6000,
    headers: APIHeaders
});