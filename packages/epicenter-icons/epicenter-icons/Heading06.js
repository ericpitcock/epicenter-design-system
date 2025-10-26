import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 17C16 18.1046 16.8954 19 18 19C19.1046 19 20 18.1046 20 17C20 15.8954 19.1046 15 18 15C16.8954 15 16 15.8954 16 17ZM16 17V13C16 11.8954 16.8954 11 18 11C19.1046 11 20 11.8954 20 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 12H13M4 19V5M13 19V5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Heading06',
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
