import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 12.7778C16 11.6391 16.9588 11 18 11C19.1046 11 20 11.8954 20 13C20 14.5 18.5 15 18.5 15C18.5 15 20 15.5 20 17C20 18.1046 19.1046 19 18 19C16.9588 19 16 18.3609 16 17.2222', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 12H13M4 19V5M13 19V5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Heading03',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
