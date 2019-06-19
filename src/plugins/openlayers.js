require('ol/ol.css')

import Map from 'ol/Map'
import View from 'ol/View'

import TileLayer from 'ol/layer/Tile'
import ImageLayer from 'ol/layer/Image'
import VectorLayer from 'ol/layer/Vector'

import OSMSource from 'ol/source/OSM'
import TileWMSSource from 'ol/source/TileWMS'
import VectorSource from 'ol/source/Vector'
import ImageWMSSource from 'ol/source/ImageWMS'

import { fromLonLat } from 'ol/proj.js'

export default ({ app, router, Vue }) => {
    let ol = {}

    ol.Map = Map

    ol.View = View

    ol.layer = {}
    ol.layer.Tile = TileLayer
    ol.layer.Image = ImageLayer
    ol.layer.Vector = VectorLayer

    ol.source = {}
    ol.source.OSM = OSMSource
    ol.source.TileWMS = TileWMSSource
    ol.source.Vector = VectorSource
    ol.source.ImageWMS = ImageWMSSource

    ol.fromLonLat = fromLonLat

    Vue.prototype.$ol = ol
}