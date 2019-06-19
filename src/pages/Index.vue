<template>
  <q-page full-width class="flex flex-center">
    <div id = "map" class="fit" style="position: absolute; overflow: hidden;">
    </div>
  </q-page>
</template>

<style>
</style>

<script>
  import Vue from 'vue'
  import Tile from 'ol/layer/Tile'
  import TileWMS from 'ol/source/TileWMS'
  import Image from 'ol/layer/Image'
  import ImageWMS from 'ol/source/ImageWMS'
  import Map from 'ol/Map'
  import View from 'ol/View'
  import { fromLonLat } from 'ol/proj.js'

  export default {
    name: 'PageIndex',
    data () {
      return {
        map: null,
        layers: ''
      }
    },
    methods: {
      initMap () {
        let ol = this.$ol

        let layers = []

        let zoom = 13
        let centerLat = -19.91791532236725
        let centerLon = -43.93525350375458

        let center = fromLonLat([centerLon, centerLat])

        /* let baseLayer = new Tile({
          name: 'OSM',
          source: new ol.source.OSM()
        }) */

        let baseLayer = new Tile({
          source: new TileWMS({
            url: 'https://geoserver.dme.com.br/geoserver/gwc/service/wms',
            serverType: 'geoserver',
            params: {
              'VERSION': '1.1.1',
              'FORMAT': 'image/png',
              'TILED': true,
              'LAYERS': 'BASE_MAP:STANDART'
            }
          })
        })

        layers.push(baseLayer)

        let layer = new Image({
          name: 'Lance Cabo',
          visible: false,
          source: new ImageWMS({
            url: 'https://geoserver.dme.com.br/geoserver/wms',
            serverType: 'geoserver',
            params: {
              'FORMAT': 'image/png8',
              'LAYERS': 'rede:lanceCabo'
            }
          })
        })

        layers.push(layer)

        let layer2 = new Image({
          name: 'Lance Duto',
          visible: false,
          source: new ImageWMS({
            url: 'https://geoserver.dme.com.br/geoserver/wms',
            serverType: 'geoserver',
            params: {
              'FORMAT': 'image/png8',
              'LAYERS': 'geoplex:lanceDutoGeoplex'
            }
          })
        })

        layers.push(layer2)

        let map = new Map({
          target: 'map',
          layers: layers,
          pixelRatio: 1,
          view: new View({
            center: center,
            zoom: zoom,
            maxZoom: 19
          })
        })

        this.map = map
        this.layers = layers
        Vue.prototype.$map = this.map
        Vue.prototype.$layers = this.layers
      }
    },
    mounted() {
      this.initMap()
    }
  }
</script>
