import VioletButton from './src/button.vue'

VioletButton.install = Vue => {
    Vue.component(VioletButton.name, VioletButton)
}

export default VioletButton