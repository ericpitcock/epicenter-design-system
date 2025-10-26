import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.5 13.5C20.5 18.1944 16.6944 22 12 22C7.30558 22 3.5 18.1944 3.5 13.5C3.5 7.95215 9.69216 3.49703 11.5063 2.31086C11.8101 2.11217 12.1899 2.11217 12.4937 2.31086C14.3078 3.49703 20.5 7.95215 20.5 13.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 12.284C5.46463 11.8303 8.39159 11.6836 11.9842 13.7016C15.57 15.7157 18.516 14.9984 20 14.1354', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Humidity',
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
