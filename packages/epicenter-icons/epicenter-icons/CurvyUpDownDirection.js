import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11 22L11 18C11 16.8954 11.8954 16 13 16H17C18.1046 16 19 15.1046 19 14C19 12.8954 18.1046 12 17 12H6.99583C5.89356 12 5 11.1064 5 10.0042C5 8.89865 5.89865 8.00375 7.00415 8.00836L10.9916 8.02499C12.0995 8.02961 13 7.13284 13 6.02501L13 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11 4L13 2L15 4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9 20L11 22L13 20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CurvyUpDownDirection',
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
