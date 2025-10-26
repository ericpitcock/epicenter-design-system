import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 18H16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13.5 18V13M10.5 14V18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15.9142 6.63204L17.3237 6.31602M17.3237 6.31602L18.7332 6M17.3237 6.31602L17.9745 9.05369M3.69837 9.37089L5.10788 9.05487M5.10788 9.05487L6.51739 8.73885M5.10788 9.05487L5.7587 11.7925M2 12.6353L21.7332 8.21097L21.9501 9.12353C22.1898 10.1315 21.5426 11.1373 20.5047 11.37L4.53018 14.9516C3.49224 15.1843 2.45657 14.5558 2.21694 13.5478L2 12.6353Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Seesaw',
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
