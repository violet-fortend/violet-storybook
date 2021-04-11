import VioletInput from '../'

export default {
    title: 'VioletInput',
    component: VioletInput
}

export const Text = () => ({
    components: { VioletInput },
    template: '<violet-input v-model="value"></violet-input>',
    data() {
        return {
            value: 'admin'
        }
    }
})

export const Password = () => ({
    components: { VioletInput },
    template: '<violet-input v-model="value" type="password"></violet-input>',
    data() {
        return {
            value: 'admin'
        }
    }
})