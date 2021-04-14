import VioletLink from '../src/link.vue'

export default {
  title: 'VioletLink',
  component: VioletLink
}

export const Link = _ => ({
  components: { VioletLink },
  template: `
<div>
  <violet-link :disabled="true" href="http://www.baidu.com">baidu</violet-link>
</div>
`
})