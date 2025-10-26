import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 12C7.5 12 12 7.5 12 3C12 7.5 16.5 12 21 12C16.5 12 12 16.5 12 21C12 16.5 7.5 12 3 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 5C17.6569 5 19 3.65685 19 2C19 3.65685 20.3431 5 22 5C20.3431 5 19 6.34315 19 8C19 6.34315 17.6569 5 16 5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 19.5C3.38071 19.5 4.5 18.3807 4.5 17C4.5 18.3807 5.61929 19.5 7 19.5C5.61929 19.5 4.5 20.6193 4.5 22C4.5 20.6193 3.38071 19.5 2 19.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Stars',
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
