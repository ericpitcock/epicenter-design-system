import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10.5 5C5.80558 5 2 8.80558 2 13.5C2 18.1944 5.80558 22 10.5 22C15.1944 22 19 17.6944 19 13C17 13 14.75 14.842 14.75 16.9M10.5 5H19C19 10.5 15.3747 11.8 12.2 11.8H10.5C9.09167 11.8 7.95 12.9417 7.95 14.35C7.95 15.7583 9.09167 16.9 10.5 16.9H14.75M10.5 5V8M14.75 16.9V18M5.4 20.3L8.8 16.9M3.275 9.25L7.95 13.075', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.009 8L14 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9.5 2L20.1608 2.0001C21.321 2.0001 22.1912 3.05117 21.9637 4.17775C21.6689 5.63736 20.3433 6.67841 18.9189 7.0001', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Prawn',
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
