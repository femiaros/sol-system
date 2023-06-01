import { useRef } from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import { maptiler } from '../utils/map-providers'
import PulseLoader from 'react-spinners/BeatLoader'
// custom hook
import useIssTrackedProps from '../hooks/useIssTrackedProps'


const IssPosition = () => {
  // *** Required states and func ***
  const [center,issMarker] = useIssTrackedProps()
  const defaultColor = "#193F93"

  const customIcon = new Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/6586/6586175.png',
    iconSize: [45,45],
    iconAnchor: [22,94],
    popupAnchor:[12,-90],
    shadowUrl: 'https://png.pngtree.com/png-clipart/20220119/ourmid/pngtree-oval-black-shadow-png-image_4325398.png',
    shadowSize: [80,80],
    shadowAnchor: [25,118]
  })
  const ZOOM_LEVEL = 2
  const mapRef = useRef()

  return (
  <div className=' relative rounded-2xl mxs:rounded-lg'> 
    {/* while map loads for the first time */}
    {!center[0] && (
      <div className=' flex h-[400px]'>
        <PulseLoader
          className="m-auto"
          color={defaultColor}
          size={35}
          aria-label="Loading Spinner"
          data-testid="Screen loader"
        />
      </div>
    )}

    {center[0] && (
      <MapContainer 
        className=' relative rounded-2xl mxs:rounded-lg'
        center={center} 
        zoom={ZOOM_LEVEL} 
        scrollWheelZoom={false}
        ref={mapRef}
      >
        {/* TileLayer from mapTiler */}
        <TileLayer
          attribution={maptiler.attribution}
          url={maptiler.url}
        />
        {/* Mark ISS position */}
        <Marker
          position={issMarker.geocode}
          icon={customIcon}
        >
          <Popup>{issMarker.popUp}</Popup>
        </Marker>

      </MapContainer>
    )}
    
  </div> 
    
  )
}

export default IssPosition





