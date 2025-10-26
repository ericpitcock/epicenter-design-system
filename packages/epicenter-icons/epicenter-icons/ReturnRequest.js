import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 8V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4.44721 3.10557L2 8H22L19.5528 3.10558C19.214 2.42801 18.5215 2 17.7639 2L6.23607 2C5.47852 2 4.786 2.428 4.44721 3.10557Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 8V2' })
const _hoisted4 = h('path', { 'd': 'M8.5 14H14C15.1046 14 16 14.8954 16 16C16 17.1046 15.1046 18 14 18H13M10 12L8 14L10 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ReturnRequest',
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
