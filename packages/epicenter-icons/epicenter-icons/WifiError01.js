import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 18.5H12.0118M12 15.5V16.5', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M17.0913 19.4855L12.8575 12.4292C12.4691 11.7818 11.5309 11.7818 11.1425 12.4292L6.9087 19.4855C6.50878 20.152 6.9889 21 7.76619 21H16.2338C17.0111 21 17.4912 20.152 17.0913 19.4855Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18.5 10C14.7324 6.66667 9.5 6.66667 5.5 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M2 7C8.31579 1.66669 15.6842 1.66668 22 6.99989', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'WifiError01',
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
