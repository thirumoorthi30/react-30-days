import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url){

    const [products, setProducts] = useState([]);
      const [error, setError] = useState("");
      const [loading, setLoading] = useState(true);

      useEffect( () => {
        const fetchApi = async() => {
            try{

                //let response =  await fetch(url);

                let response = await axios.get( url );

                setProducts(response.data);

                // if(response.ok){
                //     let data = await response.json();
                //     setProducts(data);
                // }
                // else{
                //     throw new Error("Data not found");
                // }

            }
            catch(error){
                setError(error.message);
            }
            finally{
                setLoading(false);
            }
        }

        fetchApi();

      }, []);

      return {products, error, loading, setProducts};

}

export default useFetch;