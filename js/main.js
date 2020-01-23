function initialize() {  
   
    var secheltLoc = new google.maps.LatLng  (34.080631, -117.576030);

                var myMapOptions = {
                    center: secheltLoc,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoom: 15,
                    scrollwheel: false,
                    mapTypeControl: false,
                    zoomControl: false,
                    styles: [
                        {
                            "featureType": "all",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "hue": "#0000b0"
                                },
                                {
                                    "invert_lightness": "true"
                                },
                                {
                                    "saturation": -30
                                }
                            ]
                        }
                    ]
                };
                var theMap = new google.maps.Map(document.getElementById("map"), myMapOptions);
               
                var marker = new google.maps.Marker({
                    map: theMap,
                    icon: image,
                    draggable: false,
                    animation: google.maps.Animation.DROP,
                    position: secheltLoc,
                    visible: true
                });

            }
google.maps.event.addDomListener(window, 'load', initialize);




let aboutUsBtn = document.querySelector('.header-link--about-us');
let aboutUsBlock = document.querySelector(".about-us");
let contactUsBtn = document.querySelector('.header-link--contact-us');
let contactUsBlock = document.querySelector(".contact-us");

const handleButtonClick = (showBlock) => {
    showBlock.scrollIntoView({block: "start", behavior: "smooth"});
}

aboutUsBtn.addEventListener('click', () => handleButtonClick(aboutUsBlock));
contactUsBtn.addEventListener('click', () => handleButtonClick(contactUsBlock));