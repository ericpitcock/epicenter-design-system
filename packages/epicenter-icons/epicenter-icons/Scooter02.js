import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 16C2 12.8182 4.23858 11 7 11C9.76142 11 12 12.8182 12 16H2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 8H9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10 16C10 17.6569 8.65685 19 7 19C5.34315 19 4 17.6569 4 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('circle', { 'cx': '20', 'cy': '17', 'r': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M16 8C17.3333 8.63768 20 11.1739 20 15M16 8L19 8C19 7.06812 19 6.60218 18.8478 6.23463C18.6448 5.74458 18.2554 5.35523 17.7654 5.15224C17.3978 5 16.9285 5 15.9899 5M16 8L15.9899 8M15.9899 8C15.9899 9.91304 15.7776 16 12 16H18M15.9899 8V5M15.9899 5H13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Scooter02',
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
