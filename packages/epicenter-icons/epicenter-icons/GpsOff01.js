import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8.5 4.80423C9.5572 4.28906 10.7448 4 12 4C16.4183 4 20 7.58172 20 12C20 13.2552 19.7109 14.4428 19.1958 15.5M6.1905 6.5C4.83275 7.93366 4 9.86958 4 12C4 16.4183 7.58172 20 12 20C14.1304 20 16.0663 19.1672 17.5 17.8095', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 12H20M4 12H2M12 2V4M12 20V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 2L22 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'GpsOff01',
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
