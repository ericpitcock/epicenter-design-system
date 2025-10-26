import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18.5 15H16.5M13 15H11M7.5 15H5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 6.05C16 8.58366 13.4122 10.2439 12.3995 10.7966C12.1483 10.9337 11.8517 10.9337 11.6005 10.7966C10.5878 10.2439 8 8.58366 8 6.05C8 3.81325 9.79086 2 12 2C14.2091 2 16 3.81325 16 6.05Z' })
const _hoisted3 = h('path', { 'd': 'M12 6H12.009', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5 8H4C2.89543 8 2 8.89543 2 10V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V10C22 8.89543 21.1046 8 20 8H19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'RoadLocation01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4
        ])
    }
})
