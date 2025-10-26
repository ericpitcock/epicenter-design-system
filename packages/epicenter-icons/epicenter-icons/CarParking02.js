import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 21V8L12 3L22 8V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 18V20M8 18V20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7.5 13L8.12127 10.5149C8.34385 9.62459 9.14382 9 10.0616 9H13.9384C14.8562 9 15.6561 9.62459 15.8787 10.5149L16.5 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M16 13H8C6.89543 13 6 13.8954 6 15V16C6 17.1046 6.89543 18 8 18H16C17.1046 18 18 17.1046 18 16V15C18 13.8954 17.1046 13 16 13Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M9 15.5V15.51M15 15.5V15.51', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CarParking02',
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
            _hoisted4,
            _hoisted5
        ])
    }
})
