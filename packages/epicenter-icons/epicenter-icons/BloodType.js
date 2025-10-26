import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11.5063 2.31086C11.8101 2.11217 12.1899 2.11217 12.4937 2.31086C14.3078 3.49703 20.5 7.95215 20.5 13.5C20.5 18.1944 16.6944 22 12 22C7.30558 22 3.5 18.1944 3.5 13.5C3.5 7.95215 9.69216 3.49703 11.5063 2.31086Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 16L11.5 10H12.5L13.9583 13.5M15 16L13.9583 13.5M10.0417 13.5H13.9583', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BloodType',
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
