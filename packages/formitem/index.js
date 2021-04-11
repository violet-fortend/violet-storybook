import VioletFormItem from './src/formitem.vue'

VioletFormItem.install = Vue => {
    Vue.component(VioletFormItem.name, VioletFormItem)
}

export default VioletFormItem