import React, { useState, useEffect } from 'react';
import { db, storage } from './firebase';

const storageRef = storage.ref();

function PlayList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {


    const directoryRef = storageRef.child('projectos');


    directoryRef.listAll()
      .then(res => {
        const videoFiles = res.items.filter(itemRef => itemRef.contentType.startsWith('video/'));
        setVideos(videoFiles);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <div>
      <h1>Vídeos no Storage do Firebase:</h1>
      <ul>
        {videos.map((video, index) => (
          <li key={index}>
            {/* <video width="320" height="240" controls> */}
              <img src={video.getDownloadURL()} type={video.contentType} />
              Your browser does not support the video tag.
            {/* </video> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayList;
