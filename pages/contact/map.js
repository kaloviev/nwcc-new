import React from 'react'
import { GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';
import mapIcon from 'assets/images/maps-and-flags.svg'

// const stylesArr = [
//     {
//         "featureType": "all",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "weight": "2.00"
//             }
//         ]
//     },
//     {
//         "featureType": "all",
//         "elementType": "geometry.stroke",
//         "stylers": [
//             {
//                 "color": "#9c9c9c"
//             }
//         ]
//     },
//     {
//         "featureType": "all",
//         "elementType": "labels.text",
//         "stylers": [
//             {
//                 "visibility": "on"
//             }
//         ]
//     },
//     {
//         "featureType": "landscape",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "color": "#f2f2f2"
//             }
//         ]
//     },
//     {
//         "featureType": "landscape",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "color": "#ffffff"
//             }
//         ]
//     },
//     {
//         "featureType": "landscape.man_made",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "color": "#ffffff"
//             }
//         ]
//     },
//     {
//         "featureType": "poi",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "road",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "saturation": -100
//             },
//             {
//                 "lightness": 45
//             }
//         ]
//     },
//     {
//         "featureType": "road",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "color": "#eeeeee"
//             }
//         ]
//     },
//     {
//         "featureType": "road",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "color": "#7b7b7b"
//             }
//         ]
//     },
//     {
//         "featureType": "road",
//         "elementType": "labels.text.stroke",
//         "stylers": [
//             {
//                 "color": "#ffffff"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "simplified"
//             }
//         ]
//     },
//     {
//         "featureType": "road.arterial",
//         "elementType": "labels.icon",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "transit",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "water",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "color": "#46bcec"
//             },
//             {
//                 "visibility": "on"
//             }
//         ]
//     },
//     {
//         "featureType": "water",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "color": "#c8d7d4"
//             }
//         ]
//     },
//     {
//         "featureType": "water",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "color": "#070707"
//             }
//         ]
//     },
//     {
//         "featureType": "water",
//         "elementType": "labels.text.stroke",
//         "stylers": [
//             {
//                 "color": "#ffffff"
//             }
//         ]
//     }
// ]

const styles = [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "lightness": "43"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#dddddd"
            },
            {
                "saturation": -100
            },
            {
                "lightness": -3
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#ff0000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ff0000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#bbbbbb"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 26
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "lightness": "20"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "lightness": "0"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "lightness": "14"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit.station.bus",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    }
]

// function MyComponent({ lat, lng, zoom }) {
//     return (
//         <LoadScript
//             googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
//             libraries={["places"]}
//         >
//             <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 center={{ lat, lng }}
//                 zoom={zoom}
//                 options={{ styles, mapTypeControl: false, fullscreenControl: false, streetViewControl: false }}
//             >
//                 { /* Child components, such as markers, info windows, etc. */}
//                 <Marker position={{ lat, lng }} icon={{ url: mapIcon.src }} />
//                 <></>
//             </GoogleMap>
//         </LoadScript>
//     )
// }

// Fix: google api is already presented
function MyComponent({ lat, lng, zoom, width = '100%', height = '420px' }) {
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
    })

    const renderMap = () => (
        <GoogleMap
            mapContainerStyle={{ width, height }}
            center={{ lat, lng }}
            zoom={zoom}
            options={{ styles, mapTypeControl: false, fullscreenControl: false, streetViewControl: false }}
        >
            <Marker position={{ lat, lng }} icon={{ url: mapIcon.src }} />
        </GoogleMap>
    )

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : <>Loading</>
}

export default React.memo(MyComponent)
