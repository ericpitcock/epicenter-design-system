import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 5.5C20 7.433 16.4183 9 12 9C7.58172 9 4 7.433 4 5.5C4 3.567 7.58172 2 12 2C16.4183 2 20 3.567 20 5.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 18.5C20 20.433 16.4183 22 12 22C7.58172 22 4 20.433 4 18.5C4 16.567 7.58172 15 12 15C16.4183 15 20 16.567 20 18.5Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20 18.5V5.5M4 18.5V5.5', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Cylinder01',
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
