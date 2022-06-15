
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '98cabe703fmsh5fa934d2d218867p1a426fjsn7a571311f556' 
    }
  };


export const fetchData = async (url, options) => {

        const response = await fetch(url, options);
        const data = await response.json();

        return data;

}