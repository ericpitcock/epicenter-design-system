import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22.5 20.5H1.5L3.5 16.5H20.5L22.5 20.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20.5 16.5V5C20.5 4.17157 19.8284 3.5 19 3.5H5C4.17157 3.5 3.5 4.17157 3.5 5V16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9.5 12.5C8.67157 12.5 8 11.8284 8 11C8 10.1716 8.67157 9.5 9.5 9.5H10C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5H14.5C15.3284 9.5 16 10.1716 16 11C16 11.8284 15.3284 12.5 14.5 12.5H9.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LaptopCloud',
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
