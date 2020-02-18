import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import Stamen from 'ol/source/Stamen.js';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: Map;
  mapView = null;

  constructor() { }

  ngOnInit() {
    this.mapView = new View({
      center: [0, 0],
      zoom: 2
    });

    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new Stamen({
            layer: 'toner-lite'
          })
        })
      ],
      view: this.mapView
    });
  }

}
