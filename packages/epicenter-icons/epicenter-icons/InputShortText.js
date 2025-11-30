import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 5V19M15 5C15 3.89543 15.8954 3 17 3M15 5C15 3.89543 14.1046 3 13 3M15 19C15 20.1046 15.8954 21 17 21M15 19C15 20.1046 14.1046 21 13 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 15.0002L6.37874 9.48507C6.45 9.19999 6.70615 9 7 9C7.29385 9 7.55 9.19999 7.62126 9.48507L9 15.0002M6 13.0002H8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 6H20C21.1046 6 22 6.89543 22 8V16C22 17.1046 21.1046 18 20 18H18M12 18H4C2.89543 18 2 17.1046 2 16V8C2 6.89543 2.89543 6 4 6H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'InputShortText',
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
