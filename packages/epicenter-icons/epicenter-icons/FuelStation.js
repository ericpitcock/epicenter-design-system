import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 10H16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 21V5C4 3.89543 4.89543 3 6 3H14C15.1046 3 16 3.89543 16 5V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10 13L8.5 15.5H11.5L10 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M2 21H18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M16 14H19V16.5C19 17.3284 19.6716 18 20.5 18C21.3284 18 22 17.3284 22 16.5V8.99999L20.7764 6.55289C20.607 6.21405 20.2607 6.00004 19.8819 6.0001L19 6.00025', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FuelStation',
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
