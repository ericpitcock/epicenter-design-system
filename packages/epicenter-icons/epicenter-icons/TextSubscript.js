import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11.5 21H6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 3L9 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 5.5V4C2 3.44772 2.44772 3 3 3H15C15.5523 3 16 3.44772 16 4V5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M22 21H18C18 18.779 22 18.8854 22 16.5C22 15.6716 21.1046 15 20 15C18.8954 15 18 15.6716 18 16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TextSubscript',
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
