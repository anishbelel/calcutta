import axios from "axios";
//const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getplaceData = async(type,sw,ne) =>{  
  try {
      const {data : {data}} = await axios.get( `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{

        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          
        },
        headers: {
          'x-rapidapi-key': '74e63389a4mshb569784710aef21p1dd789jsn3bd53c4795bb',
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
        }
      });
      console.log(data);
        return data;
  } catch (error) {
      console.error(error);
  }
}