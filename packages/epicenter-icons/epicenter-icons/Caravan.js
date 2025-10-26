import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 18H21C21.5523 18 22 17.5523 22 17V16M19 18V10C19 6.68629 16.3137 4 13 4H3C2.44772 4 2 4.44772 2 5V17C2 17.5523 2.44772 18 3 18H7M19 18H11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '9', 'cy': '18', 'r': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 7H5V12H12V7Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Caravan',
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
