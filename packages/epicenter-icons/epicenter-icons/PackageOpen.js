import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6.49805 5.5L2.99805 7.00001L11.998 11L20.998 7.00001L17.498 5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.998 2V4M15.998 3L14.498 5M7.99805 3L9.49805 5', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M5.99805 12L7.99805 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M3.00195 7L3.00195 18L11.998 22M11.998 22L21.002 18V7.01357M11.998 22V11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PackageOpen',
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
