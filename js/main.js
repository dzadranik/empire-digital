let aboutUsBtn = document.querySelector('.link-about-us');
let aboutUsBlock = document.querySelector(".about-us");
let contactUsBtn = document.querySelector('.link-contact-us');
let contactUsBlock = document.querySelector(".contact-us");

aboutUsBtn.addEventListener('click', function() {aboutUsBlock.scrollIntoView({ behavior: 'smooth' });});
contactUsBtn.addEventListener('click', function() {contactUsBlock.scrollIntoView({ behavior: 'smooth' });});

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
    
}
google.maps.event.addDomListener(window, 'load', initialize);