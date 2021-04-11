import VioletForm from './src/form.vue'

VioletForm.install = Vue => {
    Vue.component(VioletForm.name, VioletForm)
}

export default VioletForm