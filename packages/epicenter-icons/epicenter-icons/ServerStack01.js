import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 4H3C2.44772 4 2 4.44772 2 5V9C2 9.55228 2.44772 10 3 10H21C21.5523 10 22 9.55228 22 9V5C22 4.44772 21.5523 4 21 4Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 14H3C2.44772 14 2 14.4477 2 15V19C2 19.5523 2.44772 20 3 20H21C21.5523 20 22 19.5523 22 19V15C22 14.4477 21.5523 14 21 14Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6 17H6.01', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M10 17H10.01', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M6 7H6.01', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M10 7H10.01', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ServerStack01',
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
            _hoisted4,
            _hoisted5,
            _hoisted6
        ])
    }
})
