import VioletButton from '../'

export default {
    title: 'VioletButton',
    component: VioletButton
}

export const click = () => ({
    components: { VioletButton },
    template: '<violet-button @click="handleClick"></violet-button>',
    methods: {
        handleClick() {
            alert('点击')
        }
    }
})