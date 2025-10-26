import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13 2.04938C12.6711 2.01672 12.3375 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 11H8.70711C8.25435 11 7.82014 10.8201 7.5 10.5M14 11H15.2929C15.7456 11 16.1799 10.8201 16.5 10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '12', 'cy': '16', 'r': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M17 2H21V2.5L17 6.5V7H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Sleeping',
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
