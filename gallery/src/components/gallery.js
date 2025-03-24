import React, { useEffect, useState } from 'react';

const API = 'https://picsum.photos/v2/list?page=2&limit=30';

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((error) => console.error('An error occured', error));
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', 'justify-content': 'center', 'padding-top': '30px' }}>
      {images.length > 0 ? (
        images.map((img) => (
          <img
            src={img.download_url}
            alt={img.title}
            height="150"
            width="250"
            style={{
              borderRadius: '10px',
            }}
          />
        ))
      ) : (
        <p>loading....</p>
      )}
    </div>
  );
}
