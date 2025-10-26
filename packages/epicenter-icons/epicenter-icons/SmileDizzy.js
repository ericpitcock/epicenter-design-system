import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 11L8.5 9.5M8.5 9.5L7 8M8.5 9.5L7 11M8.5 9.5L10 8M17 11L15.5 9.5M15.5 9.5L14 8M15.5 9.5L14 11M15.5 9.5L17 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SmileDizzy',
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
