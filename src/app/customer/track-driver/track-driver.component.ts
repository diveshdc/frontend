import { Component, OnInit } from '@angular/core';
import { MouseEvent, AgmMap } from '@agm/core';
import { TravelMarker, TravelMarkerOptions, TravelData, TravelEvents, EventType } from 'travel-marker';

declare var google: any;

@Component({
  selector: 'app-track-driver',
  templateUrl: './track-driver.component.html',
  styleUrls: ['./track-driver.component.css']
})
export class TrackDriverComponent implements OnInit {
    // google maps zoom level
    // tslint:disable-next-line:member-ordering
    zoom: Number = 15;
    // initial center position for the map
    lat: Number = 51.512802;
    lng: Number = -0.091324;
    map: any;
    line: any;
    directionsService: any;
    marker: TravelMarker = null;

    // speedMultiplier to control animation speed
    speedMultiplier = 1;

  constructor() { }

  ngOnInit(): void {
  }

    onMapReady(map: any) {
      console.log(map);
      this.map = map;
      // this.calcRoute();
      this.mockDirections();
      // this.initEvents();
    }

  /**
   *                  IMPORTANT NOTICE
   *  Google stopped its FREE TIER for Directions service.
   *  Hence the below route calculation will not work unless you provide your own key with directions api enabled
   *
   *  Meanwhile, for the sake of demo, precalculated value will be used
   */

    // get locations from direction service
    calcRoute() {
      this.line = new google.maps.Polyline({
        strokeOpacity: 0.5,
        path: [],
        map: this.map
      });

      const start = new google.maps.LatLng(51.513237, -0.099102);
      const end = new google.maps.LatLng(51.514786, -0.080799);
      const request = {
          origin: start,
          destination: end,
          travelMode: google.maps.TravelMode.BICYCLING
      };
      this.directionsService = new google.maps.DirectionsService();
      this.directionsService.route(request, (response, status) => {
        // Empty response as API KEY EXPIRED
        console.log(response);
        if (status === google.maps.DirectionsStatus.OK) {
          const legs = response.routes[0].legs;
          for (let i = 0; i < legs.length; i++) {
            // tslint:disable-next-line:prefer-const
            let steps = legs[i].steps;
            for (let j = 0; j < steps.length; j++) {
              const nextSegment = steps[j].path;
              for (let k = 0; k < nextSegment.length; k++) {
                this.line.getPath().push(nextSegment[k]);
              }
            }
          }
          this.initRoute();
        }
      });
    }

  /**
   *                  IMPORTANT NOTICE
   *  Google stopped its FREE TIER for Directions service.
   *  Hence the below route calculation will not work unless you provide your own key with directions api enabled
   *
   *  Meanwhile, for the sake of demo, precalculated value will be used
   */

    // mock directions api
    mockDirections() {
     const locationData = [[51.51324, -0.09909000000000001], [51.51478, -0.08078]]
     console.log(locationData);
     const locationArray = locationData.map(l => new google.maps.LatLng(l[0], l[1]));
      this.line = new google.maps.Polyline({
        strokeOpacity: 0.5,
        path: [],
        map: this.map
      });
      locationArray.forEach(l => this.line.getPath().push(l));

      const start = new google.maps.LatLng(51.513237, -0.099102);
      const end = new google.maps.LatLng(51.514786, -0.080799);

      const startMarker = new google.maps.Marker({position: start, map: this.map, label: 'A'});
      const endMarker = new google.maps.Marker({position: end, map: this.map, label: 'B'});
      this.initRoute();
    }

    // initialize travel marker
    initRoute() {
      const route = this.line.getPath().getArray();

      // options
      const options: TravelMarkerOptions = {
        map: this.map,  // map object
        speed: 50,  // default 10 , animation speed
        interval: 10, // default 10, marker refresh time
        speedMultiplier: this.speedMultiplier,
        markerOptions: {
          title: 'Travel Marker',
          animation: google.maps.Animation.DROP,
          icon: {
            url: 'https://i.imgur.com/eTYW75M.png',
            // This marker is 20 pixels wide by 32 pixels high.
            animation: google.maps.Animation.DROP,
            // size: new google.maps.Size(256, 256),
            scaledSize: new google.maps.Size(128, 128),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(53, 110)
          }
        },
      };

      // define marker
      this.marker = new TravelMarker(options);

      // add locations from direction service
      this.marker.addLocation(route);

      setTimeout(() => this.play(), 2000);
    }

    // play animation
    play() {
      this.marker.play();
    }

    // pause animation
    pause() {
      this.marker.pause();
    }

    // reset animation
    reset() {
      this.marker.reset();
    }

    // jump to next location
    next() {
      this.marker.next();
    }

    // jump to previous location
    prev() {
      this.marker.prev();
    }

    // fast forward
    fast() {
      this.speedMultiplier *= 2;
      this.marker.setSpeedMultiplier(this.speedMultiplier);
    }

    // slow motion
    slow() {
      this.speedMultiplier /= 2;
      this.marker.setSpeedMultiplier(this.speedMultiplier)
    }

   initEvents() {
      this.marker.event.onEvent((event: EventType, data: TravelData) => {
        console.log(event, data);
      });
    }

}
