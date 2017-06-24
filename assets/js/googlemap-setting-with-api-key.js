var map;
      var peta = document.getElementById('maps');

     var myLat = $('#maps').data('lat'),
		myLng = $('#maps').data('lng'),
		myMarkerx = $('#maps').data('marker');
	
	
		var latitude = myLat,
			longitude = myLng,
			markerx = myMarkerx,
			map_zoom = 14;

		//google map custom marker icon - .png fallback for IE11
		var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
		var marker_url = ( is_internetExplorer11 ) ? markerx : markerx;

		//define the basic color of your map, plus a value for saturation and brightness
		var main_color = '#000000',
			saturation_value= -80,
			brightness_value= 5;

		//we define here the style of the map
		var style= [
			{
				//set saturation for the labels on the map
				elementType: "labels",
				stylers: [
					{saturation: saturation_value}
				]
			},
			{ //poi stands for point of interest - don't show these lables on the map
				featureType: "poi",
				elementType: "labels",
				stylers: [
					{visibility: "off"}
				]
			},
			{
				//don't show highways lables on the map
				featureType: 'road.highway',
				elementType: 'labels',
				stylers: [
					{visibility: "off"}
				]
			},
			{
				//don't show local road lables on the map
				featureType: "road.local",
				elementType: "labels.icon",
				stylers: [
					{visibility: "off"}
				]
			},
			{
				//don't show arterial road lables on the map
				featureType: "road.arterial",
				elementType: "labels.icon",
				stylers: [
					{visibility: "off"}
				]
			},
			{
				//don't show road lables on the map
				featureType: "road",
				elementType: "geometry.stroke",
				stylers: [
					{visibility: "off"}
				]
			},
			//style different elements on the map
			{
				featureType: "transit",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" },
					{ lightness: brightness_value },
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "poi",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" },
					{ lightness: brightness_value },
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "poi.government",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" },
					{ lightness: brightness_value },
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "poi.sport_complex",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" },
					{ lightness: brightness_value },
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "poi.attraction",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" },
					{ lightness: brightness_value },
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "poi.business",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" },
					{ lightness: brightness_value },
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "transit",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" },
					{ lightness: brightness_value },
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "transit.station",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" },
					{ lightness: brightness_value },
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "landscape",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" },
					{ lightness: brightness_value },
					{ saturation: saturation_value }
				]

			},
			{
				featureType: "road",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" },
					{ lightness: brightness_value },
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "road.highway",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" },
					{ lightness: brightness_value },
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "water",
				elementType: "geometry",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" },
					{ lightness: brightness_value },
					{ saturation: saturation_value }
				]
			}
		];

		function CustomZoomControl(controlDiv, map) {
			//grap the zoom elements from the DOM and insert them in the map
			var controlUIzoomIn= document.getElementById('cd-zoom-in'),
				controlUIzoomOut= document.getElementById('cd-zoom-out');
			controlDiv.appendChild(controlUIzoomIn);
			controlDiv.appendChild(controlUIzoomOut);

			// Setup the click event listeners and zoom-in or out according to the clicked element
			google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
				map.setZoom(map.getZoom()+1)
			});
			google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
				map.setZoom(map.getZoom()-1)
			});
		}
	
      	function initMap() {

	      	//set google map options
			var map_options = {
				center: new google.maps.LatLng(latitude, longitude),
	          	zoom: 8,
	          	panControl: false,
				zoomControl: false,
				mapTypeControl: false,
				streetViewControl: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				scrollwheel: false,
				zoom: map_zoom,
				//styles: style
			}

	        map = new google.maps.Map(document.getElementById('maps'), map_options);

	        //add a custom marker to the map
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(latitude, longitude),
				map: map,
				visible: true,
				icon: marker_url,
			});

			var zoomControlDiv = document.createElement('div');
			var zoomControl = new CustomZoomControl(zoomControlDiv, map);

			//insert the zoom div on the top left of the map
			map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);

  		}