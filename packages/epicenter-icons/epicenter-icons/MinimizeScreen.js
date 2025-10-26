import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 9.125L2.00032 3.99988C2.00039 2.89536 2.89581 2 4.00033 2.00001L20 2.00009C21.1046 2.0001 22 2.89553 22 4.00009V18.9732C22 20.074 21.1105 20.9678 20.0098 20.9732L14.5174 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 3L14 10M13.5 6.5V10.5H17.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 15.5V14C2 13.4477 2.44772 13 3 13H4.5M8.5 13H10C10.5523 13 11 13.4477 11 14V15.5M11 19.5V21C11 21.5523 10.5523 22 10 22H8.5M4.5 22H3C2.44772 22 2 21.5523 2 21V19.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MinimizeScreen',
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
