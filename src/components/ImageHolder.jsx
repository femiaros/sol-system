import { useState,useEffect } from "react"
import { Blurhash } from "react-blurhash"

const ImageHolder = ({src,hashString}) => {
    // *** required state ***
    const [imageLoaded,setImageLoaded] = useState(false)

    useEffect(()=>{
      const img = new Image()
      img.onload = ()=>{
        setImageLoaded(true)
      }
      img.src = src
    },[src])

  return (
    <>
   
      {
        !imageLoaded &&
        <Blurhash 
          className='rounded-2xl'
          hash={hashString}
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        /> 
      }
    
      {
        imageLoaded &&
        <img
          src={src}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />
      }
    </>
  )
}

export default ImageHolder