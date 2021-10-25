import icon from '../../img/icons/mainLoacal.svg';
import { starsInit } from '../../befreeApp/components/stars/stars';
 

function initMap() {
  let mapWrap = document.querySelector('#map');
  if (mapWrap) {
    var appMap;

    appMap = new google.maps.Map(mapWrap, {
      center: { lat: 55.754374, lng: 37.617068 },
      zoom: 14,
      scrollwheel: false,
      disableDefaultUI: true,
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "administrative.neighborhood",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#919191"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c6fbf7"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#c6fbf7"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#c6fbf7"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
      ]
    });

    var marker = new google.maps.Marker({
      position: { lat: 55.754374, lng: 37.617068 },
      map: appMap,
      title: '',
      label: '',
      icon: icon,
    });

    const contentString = `
    <div class="info-card info-card-map">
    <div class="info-card__like">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.00173 8.47298C2.98357 9.2487 3.10839 10.0202 3.36835 10.739C3.36835 10.739 3.8438 12 4.5 12.6562L12.0083 21L19.5044 12.6562C19.9951 12.1141 20.381 11.464 20.638 10.7465C20.895 10.0289 21.0175 9.25947 20.998 8.48622C20.9784 7.71297 20.8172 6.95258 20.5243 6.25264C20.2315 5.55271 19.8134 4.92829 19.2961 4.41848C18.7788 3.90867 18.1736 3.52443 17.5182 3.28982C16.8629 3.0552 16.1715 2.97527 15.4875 3.055C14.8034 3.13474 14.1413 3.37244 13.5426 3.75323C12.944 4.13401 12.4216 4.64968 12.0083 5.26797C11.5968 4.64516 11.0751 4.12494 10.476 3.74008C9.87693 3.35521 9.21351 3.11402 8.5275 3.03171C7.84149 2.9494 7.14776 3.02775 6.49 3.26181C5.83223 3.49588 5.22468 3.8806 4.7056 4.39174C4.18652 4.90289 3.76715 5.52939 3.47391 6.23178C3.18067 6.93418 3.0199 7.69727 3.00173 8.47298Z"
          stroke="#B8B9D0" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </div>
    <div class="info-card__row column">
      <div class="info-card__img">
        <img src="imgApp/dunkin-big.jpg" alt="">
      </div>
      <div class="info-card__text-wrap">
        <div class="info-card__title">Dunkin' Donuts</div>
        <div class="info-card__row space-between">
          <ul class="icons">
            <li>
              <img src="imgApp/icons/b/b03.svg" alt="">
            </li>
            <li>
              <img src="imgApp/icons/b/b02.svg" alt="">
            </li>
            <li>
              <img src="imgApp/icons/b/b01.svg" alt="">
            </li>
          </ul>
          <div class="stars" data-value="4.5">
            <div class="stars__line-1">
              <div class="star">
                <svg width="14" height="14" viewBox="0 0 14 14"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 11.2516L11.326 14L10.178 8.82L14 5.33474L8.967 4.88526L7 0L5.033 4.88526L0 5.33474L3.822 8.82L2.674 14L7 11.2516Z"
                    fill="#6D71F9" />
                </svg>
              </div>
              <div class="star">
                <svg width="14" height="14" viewBox="0 0 14 14"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 11.2516L11.326 14L10.178 8.82L14 5.33474L8.967 4.88526L7 0L5.033 4.88526L0 5.33474L3.822 8.82L2.674 14L7 11.2516Z"
                    fill="#6D71F9" />
                </svg>
              </div>
              <div class="star">
                <svg width="14" height="14" viewBox="0 0 14 14"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 11.2516L11.326 14L10.178 8.82L14 5.33474L8.967 4.88526L7 0L5.033 4.88526L0 5.33474L3.822 8.82L2.674 14L7 11.2516Z"
                    fill="#6D71F9" />
                </svg>
              </div>
              <div class="star">
                <svg width="14" height="14" viewBox="0 0 14 14"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 11.2516L11.326 14L10.178 8.82L14 5.33474L8.967 4.88526L7 0L5.033 4.88526L0 5.33474L3.822 8.82L2.674 14L7 11.2516Z"
                    fill="#6D71F9" />
                </svg>
              </div>
              <div class="star">
                <svg width="14" height="14" viewBox="0 0 14 14"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 11.2516L11.326 14L10.178 8.82L14 5.33474L8.967 4.88526L7 0L5.033 4.88526L0 5.33474L3.822 8.82L2.674 14L7 11.2516Z"
                    fill="#6D71F9" />
                </svg>
              </div>
            </div>
            <div class="stars__line-2">
              <div class="star">
                <svg width="14" height="14" viewBox="0 0 14 14"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 11.2516L11.326 14L10.178 8.82L14 5.33474L8.967 4.88526L7 0L5.033 4.88526L0 5.33474L3.822 8.82L2.674 14L7 11.2516Z"
                    fill="#6D71F9" />
                </svg>
              </div>
              <div class="star">
                <svg width="14" height="14" viewBox="0 0 14 14"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 11.2516L11.326 14L10.178 8.82L14 5.33474L8.967 4.88526L7 0L5.033 4.88526L0 5.33474L3.822 8.82L2.674 14L7 11.2516Z"
                    fill="#6D71F9" />
                </svg>
              </div>
              <div class="star">
                <svg width="14" height="14" viewBox="0 0 14 14"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 11.2516L11.326 14L10.178 8.82L14 5.33474L8.967 4.88526L7 0L5.033 4.88526L0 5.33474L3.822 8.82L2.674 14L7 11.2516Z"
                    fill="#6D71F9" />
                </svg>
              </div>
              <div class="star">
                <svg width="14" height="14" viewBox="0 0 14 14"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 11.2516L11.326 14L10.178 8.82L14 5.33474L8.967 4.88526L7 0L5.033 4.88526L0 5.33474L3.822 8.82L2.674 14L7 11.2516Z"
                    fill="#6D71F9" />
                </svg>
              </div>
              <div class="star">
                <svg width="14" height="14" viewBox="0 0 14 14"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 11.2516L11.326 14L10.178 8.82L14 5.33474L8.967 4.88526L7 0L5.033 4.88526L0 5.33474L3.822 8.82L2.674 14L7 11.2516Z"
                    fill="#6D71F9" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="info-card__row column">
      <div class="info-card__text-icon">
        <img src="imgApp/icons/map-pin.svg" alt="">
        220 Front St, Juneau, AK 99801, US,
      </div>
      <div class="info-card__text-icon">
        <img src="imgApp/icons/phone.svg" alt="">
        +1 907-523-0303
      </div>
    </div>
    <div class="info-card__row">
      <div class="info-card__btn-group">
        <button class="info-card__btn">
          <img src="imgApp/icons/chat-dots.svg" alt="">
        </button>
        <button class="info-card__btn">
          <img src="imgApp/icons/share.svg" alt="">
        </button>
        <button class="info-card__btn">
          <img src="imgApp/icons/pedestrian.svg" alt="">
        </button>
      </div>
      <button class="info-card__btn-go button btn-green"><span>go</span></button>
    </div>
  </div>
    `;

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    infowindow.addListener('domready', (i) => {
      starsInit();
    })

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map: appMap,
        shouldFocus: false,
        minWidth: 252,
      });
    });

  }
}

window.initMap = initMap;

// {
// 	var isMap = document.getElementById("map");
// 	if(isMap) {
// 		var map;

// 		var center = {
// 			lat: 55.754374,
// 			lng: 37.617068,
// 		}

// 		var markerPosition = {
// 			lat: 55.754374,
// 			lng: 37.617068,
// 		}


// 		function initMap() {

	
// 			map = new google.maps.Map(document.getElementById('map'), {
// 				center: {lat: center.lat, lng: center.lng},
// 				zoom: 14,
// 				scrollwheel: false,
// 				disableDefaultUI: true,
// 				styles: [
// 					{
// 					  "elementType": "geometry",
// 					  "stylers": [
// 						{
// 						  "color": "#f5f5f5"
// 						}
// 					  ]
// 					},
// 					{
// 					  "elementType": "labels.icon",
// 					  "stylers": [
// 						{
// 						  "visibility": "off"
// 						}
// 					  ]
// 					},
// 					{
// 					  "elementType": "labels.text.fill",
// 					  "stylers": [
// 						{
// 						  "color": "#616161"
// 						}
// 					  ]
// 					},
// 					{
// 					  "elementType": "labels.text.stroke",
// 					  "stylers": [
// 						{
// 						  "color": "#f5f5f5"
// 						}
// 					  ]
// 					},
// 					{
// 					  "featureType": "administrative.land_parcel",
// 					  "elementType": "labels.text.fill",
// 					  "stylers": [
// 						{
// 						  "color": "#bdbdbd"
// 						}
// 					  ]
// 					},
// 					{
// 					  "featureType": "administrative.locality",
// 					  "elementType": "labels.text.fill",
// 					  "stylers": [
// 						{
// 						  "color": "#bdbdbd"
// 						}
// 					  ]
// 					},
// 					{
// 					  "featureType": "administrative.neighborhood",
// 					  "elementType": "labels.text.fill",
// 					  "stylers": [
// 						{
// 						  "color": "#919191"
// 						}
// 					  ]
// 					},
// 					{
// 					  "featureType": "poi",
// 					  "elementType": "geometry",
// 					  "stylers": [
// 						{
// 						  "color": "#eeeeee"
// 						}
// 					  ]
// 					},
// 					{
// 					  "featureType": "poi",
// 					  "elementType": "labels.text.fill",
// 					  "stylers": [
// 						{
// 						  "color": "#757575"
// 						}
// 					  ]
// 					},
// 					{
// 					  "featureType": "poi.park",
// 					  "elementType": "geometry",
// 					  "stylers": [
// 						{
// 						  "color": "#e5e5e5"
// 						}
// 					  ]
// 					},
// 					{
// 					  "featureType": "poi.park",
// 					  "elementType": "labels.text.fill",
// 					  "stylers": [
// 						{
// 						  "color": "#9e9e9e"
// 						}
// 					  ]
// 					},
// 					{
// 					  "featureType": "road",
// 					  "elementType": "geometry",
// 					  "stylers": [
// 						{
// 						  "color": "#ffffff"
// 						}
// 					  ]
// 					},
// 					{
// 					  "featureType": "road.arterial",
// 					  "elementType": "labels.text.fill",
// 					  "stylers": [
// 						{
// 						  "color": "#757575"
// 						}
// 					  ]
// 					},
// 					{
// 					  "featureType": "road.highway",
// 					  "elementType": "geometry",
// 					  "stylers": [
// 						{
// 						  "color": "#c6fbf7"
// 						}
// 					  ]
// 					},
// 					{
// 					  "featureType": "road.highway",
// 					  "elementType": "labels.text.fill",
// 					  "stylers": [
// 						{
// 						  "color": "#616161"
// 						}
// 					  ]
// 					},
// 					{
// 					  "featureType": "road.local",
// 					  "elementType": "labels.text.fill",
// 					  "stylers": [
// 						{
// 						  "color": "#9e9e9e"
// 						}
// 					  ]
// 					},
// 					{
// 					  "featureType": "transit.line",
// 					  "elementType": "geometry",
// 					  "stylers": [
// 						{
// 						  "color": "#e5e5e5"
// 						}
// 					  ]
// 					},
// 					{
// 					  "featureType": "transit.station",
// 					  "elementType": "geometry",
// 					  "stylers": [
// 						{
// 						  "color": "#eeeeee"
// 						}
// 					  ]
// 					},
// 					{
// 					  "featureType": "water",
// 					  "elementType": "geometry",
// 					  "stylers": [
// 						{
// 						  "color": "#c9c9c9"
// 						}
// 					  ]
// 					},
// 					{
// 					  "featureType": "water",
// 					  "elementType": "geometry.fill",
// 					  "stylers": [
// 						{
// 						  "color": "#c6fbf7"
// 						}
// 					  ]
// 					},
// 					{
// 					  "featureType": "water",
// 					  "elementType": "geometry.stroke",
// 					  "stylers": [
// 						{
// 						  "color": "#c6fbf7"
// 						}
// 					  ]
// 					},
// 					{
// 					  "featureType": "water",
// 					  "elementType": "labels.text.fill",
// 					  "stylers": [
// 						{
// 						  "color": "#9e9e9e"
// 						}
// 					  ]
// 					}
// 				  ]
// 			});

// 			var marker = new google.maps.Marker({
// 			    position: {lat: markerPosition.lat, lng: markerPosition.lng},
// 			    map: map,
// 			    title: '',
// 			    label: '',

// 			     icon: icon,
// 			});

// 		}

//         window.initMap = initMap;
// 	}
// }