import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 3H20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5.5 3V5.03039C5.5 6.27227 6.07682 7.4437 7.06116 8.20089L12 12L16.9388 8.20089C17.9232 7.44371 18.5 6.27227 18.5 5.03039V3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5.5 21V18.9696C5.5 17.7277 6.07682 16.5563 7.06116 15.7991L12 12L16.9388 15.7991C17.9232 16.5563 18.5 17.7277 18.5 18.9696V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M4 21H20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Hourglass',
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
