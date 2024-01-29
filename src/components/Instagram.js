import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Marginbottom } from './style/Commonui'
import './instagram.scss';



function Instagram() {
  const [instadb, setinsta] = useState([])
  const getInstagramContents = async () => {
    const { data } = await axios.get("https://graph.instagram.com/7094419053960213/media?fields=id,media_type,media_url,permalink,thumbnail_url,username,caption&access_token=IGQWRPYktmMEpZAamNtZAVpFRVZA3N1kwRVFQZAWxSR0JLdmZAheWJxZA0dmcklETVVnYUhQd1ZAXN29XRHBWdTdKOFp0MHNtYXR4a0RYVjlQSE9PZAUhvZAEZAPUjh1eHBZASXpXU1lDaDBwY1N2ZADNGUQZDZD");
    console.log(data)
    setinsta([...data.data])
  }

  useEffect(() => {
    getInstagramContents()
  }, [])
  const [content, setCont] = useState([]);
  // const [cartImgHover, setCartImgHover] = useState("bi bi-cart")

  const tableSelect = async () => {
    try {
      const response = await axios.post(`http://selfpage.cafe24app.com/data/markerData`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log("된거야만거야>>>>>>>>>", response);
      setCont([...response.data]);
    } catch (error) {
      console.log("에러다>>>>>>>>>", error);
    }
  }

  useEffect(() => {
    tableSelect();
  }, []);

  return (
    <Marginbottom>
      <section className='instagramsection mycontainer d-flex justify-content-center'>
        {instadb && instadb.map((e) => {
          return (
            <>
              <img src={e.media_url} alt="인스타게시물" />
            </>
          )
        })}

      </section>

    </Marginbottom>
  )
}

export default Instagram
