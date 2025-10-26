import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 9.5V17C5 17 6 19 9.5 19C13 19 14 17 14 17V16.5M14 9V13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 9.5C5 10.8807 7.01472 12 9.5 12C11.9853 12 14 10.8807 14 9.5C14 8.11929 11.9853 7 9.5 7C7.01472 7 5 8.11929 5 9.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9.50898 9.5L9.5 9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M2 18L22 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M2 14L5 12.65M22 5L14 8.6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Sushi03',
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
