import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11 13L4 20L2 18L9 11M15 3L19 7L14 12L10 8L15 3Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.2481 6.5C9.30224 4.79473 7.21954 3.29473 5 2C8.28028 2 11.162 2.66421 13.5 3.99263M15.5 10.8047C15.6967 11.0338 15.8916 11.2656 16.0847 11.5M18 8.5C18 8.5 18.7779 9.46253 19 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 14H18M20.25 17.5H18M20.25 17.5C21.2165 17.5 22 16.7165 22 15.75C22 14.7835 21.2165 14 20.25 14H19.5M20.25 17.5C21.2165 17.5 22 18.2835 22 19.25C22 20.2165 21.2165 21 20.25 21H19.5M18 17.5V14M18 17.5V21M17 21H18M18 14H19.5M18 21H19.5M19.5 14V13M19.5 21V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Mining03',
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
