import VioletLink from './src/link.vue'

VioletLink.install = Vue => {
Vue.component(VioletLink.name, VioletLink)
}

export default VioletLink