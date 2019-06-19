<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Introduction app
        </q-toolbar-title>

        <div>app v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    > 
    <template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-list link>
        <q-item tag="label" v-ripple>
        <q-item-section avatar>
          <q-checkbox v-model="opcao1" value="opcao1" color="red" @input="selectOp1" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Lance Cabo</q-item-label>
          <!--<q-item-label caption>Selecione esta opção para ativar o layer 1</q-item-label>-->
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section avatar>
          <q-checkbox v-model="opcao2" value="opcao2" color="blue" @input="selectOp2"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>Lance Duto</q-item-label>
          <!--<q-item-label caption>Selecione esta opção para ativar o layer 2</q-item-label>-->
        </q-item-section>
      </q-item>
      </q-list>
      </div>
      </div>
      </template>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
//var {layer, layer2} = require('../pages/Index')
//let layer = this.$layer
//let layer2 = this.$layer2
import Vue from 'vue';
import map from '../pages/Index'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      opcao1: false,
      opcao2: false
    }
  },
  methods: {
    openURL,
    selectOp1() {
      if(this.opcao1) {
        //Ativa layer 1: Lance Cabo
        //console.log('Opcao 1: ' + layers)
        this.$map.getLayers().item(1).setVisible(true)
      } else {
        this.$map.getLayers().item(1).setVisible(false)
      }
      
    },
    selectOp2() {
      if(this.opcao2) {
        //Ativa layer 2: Lance Duto
        this.$map.getLayers().item(2).setVisible(true)
      } else {
        this.$map.getLayers().item(2).setVisible(false)
      }
    }
  }
}
</script>

<style>
</style>
