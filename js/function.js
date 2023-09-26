window.onload = function(){

    var map;

    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-20.6436524,-46.5066368),
            scrollwheel:false,
            zoom:12,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById("mapa"),mapProp);
    }

    function addMarker(lat,long,icon,content,click){
        var latLng = {'lat':lat, 'lng':Lng};

        var marker = new google.maps.Marker({
            position:latLng,
            map:map,
            icon:icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content:content,
            maxWidth:200,
            pixelOffset: new google.maps.Size(0,20)
        })

        if(click == true){
            google.maps.event.addListene(marker, 'click', function(){
            infoWindow.open(map,marker);
        })
        }else{
            infoWindow.open(map,marker);
        }

    }

    initialize();

    var conteudo = '<p style="color:black;font-size:13px;padding:10px 0;>Meu endereço</p/"'
    addMarker(-20.6436524, -46.5066368, '', conteudo, true);

    //mudando posição
    //map.panTo({'lat' : -23.550520, 'lng' : -46.633309});

    //mudando posição após um tempo definido
    setTimeout(function(){
        map.panTo({'lat' : -23.550520, 'lng' : -46.633309});
    },4000);

    //mudando zoom
    setTimeout(function(){
        map.setZoom(8);
    },4000);

}