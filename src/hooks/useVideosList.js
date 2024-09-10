import { useEffect } from "react";
import { getDatabase, ref, query, orderByKey, get } from "firebase/database";
import { useState } from "react";

export default function useVideosList() {

    const [error, setError] = useState(true);
    const [loading, setLoading] = useState(false);
    const [videos, setVideos] = useState([]);


    useEffect(()=>{
      async function fetchVideos() {
        //database related works
        const db = getDatabase();
        const videosRef = ref(db, 'videos');
        const videosQuery = query(
            videosRef,
            orderByKey()
        );

        try {
            setError(false)
            setLoading(true)

            //request firebase databse
            const snapshot = await get(videosQuery);
            setLoading(false)

            if(snapshot.exists()){
              setVideos((prevVideos)=>{
                return [...prevVideos, ...Object.values(snapshot.val())]
              });
            }else{
              ///
            }
        } catch (err) {
            console.log(err);
            setError(true)
            setLoading(false)
        }
      }

      fetchVideos();
    },[])

    return {
        loading,
        error,
        videos
    }
}