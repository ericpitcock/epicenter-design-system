import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 3C20 3 13 19 2 19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11 19H13M16 19L18 19M18 19C18 20.1046 18.8954 21 20 21C21.1046 21 22 20.1046 22 19C22 17.8954 21.1046 17 20 17C18.8954 17 18 17.8954 18 19Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'EaseInControlPoint',
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
