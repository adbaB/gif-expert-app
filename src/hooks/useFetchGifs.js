import { useEffect, useState } from "react";
import getGifs from './../helpers/getGifs'

const useFetchGifs = (category) =>{

    const [state,setState] = useState({
        data: [],
        loanding: true
    })

  useEffect(() => {
    getGifs(category).then(imgs =>{
        setTimeout(()=>{

            setState({
                data: imgs,
                loanding:false
            })
        },3000)
    })
  }, [category])
  

    return state
}

export default useFetchGifs