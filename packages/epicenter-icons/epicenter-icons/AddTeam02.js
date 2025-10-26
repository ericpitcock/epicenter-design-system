import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 20V16.9852C3 16.364 3.28162 15.7658 3.81618 15.4494C5.34261 14.546 7.32863 14 9.5 14C10.7448 14 11.9287 14.1795 13 14.5028', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 14V20M15 17H21', 'stroke-linecap': 'round' })
const _hoisted3 = h('circle', { 'cx': '9.5', 'cy': '7.5', 'r': '3.5' })
const _hoisted4 = h('path', { 'd': 'M14.5 4.14453C15.9457 4.57481 17 5.91408 17 7.49959C17 9.0851 15.9457 10.4244 14.5 10.8547', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'AddTeam02',
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
