import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 2H5C3.34315 2 2 3.34315 2 5V15C2 16.6569 3.34315 18 5 18H19C20.6569 18 22 16.6569 22 15V5C22 3.34315 20.6569 2 19 2Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 22C14.8233 21.364 13.4571 21 12 21C10.5429 21 9.17669 21.364 8 22', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'ModernTv',
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
