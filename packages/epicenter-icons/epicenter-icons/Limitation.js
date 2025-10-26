import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13.5 10.5L18 5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '12', 'cy': '12', 'r': '1.5', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 18.999L18.001 21C20.4293 19.1755 22 16.2712 22 13C22 7.47715 17.5228 3 12 3C6.47715 3 2 7.47715 2 13C2 16.2712 3.57069 19.1755 5.99902 21L8 18.999', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Limitation',
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
