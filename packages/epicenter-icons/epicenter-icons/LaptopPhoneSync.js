import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13 20.5H2L4 16.5H13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 7.5V5C21 4.17157 20.3284 3.5 19.5 3.5H5.5C4.67157 3.5 4 4.17157 4 5V16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21 10.5H17C16.4477 10.5 16 10.9477 16 11.5V19.5C16 20.0523 16.4477 20.5 17 20.5H21C21.5523 20.5 22 20.0523 22 19.5V11.5C22 10.9477 21.5523 10.5 21 10.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LaptopPhoneSync',
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
