import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 4H8C6.89543 4 6 4.89543 6 6V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V6C18 4.89543 17.1046 4 16 4Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 6.5V6.5C21.1716 6.5 20.5 7.17157 20.5 8V16C20.5 16.8284 21.1716 17.5 22 17.5V17.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 6.5V6.5C2.82843 6.5 3.5 7.17157 3.5 8V16C3.5 16.8284 2.82843 17.5 2 17.5V17.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CarouselHorizontal02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
