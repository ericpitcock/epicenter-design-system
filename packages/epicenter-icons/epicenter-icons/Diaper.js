import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 4H4C2.89543 4 2 4.89543 2 6V10C2 15.5228 6.47715 20 12 20C17.5228 20 22 15.5228 22 10V6C22 4.89543 21.1046 4 20 4Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17.5 8H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 8H6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M14.5 19.5V18.5C14.5 14.634 17.634 11.5 21.5 11.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M9.5 19.5V18.5C9.5 14.634 6.36599 11.5 2.5 11.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Diaper',
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
