import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V5C21 3.34315 19.6569 2 18 2H6C4.34315 2 3 3.34315 3 5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.5 10.5005L8.5 13.5M12.0002 6.00012L16.0005 10.0005L13.5004 12.5006L9.5 8.5003L12.0002 6.00012Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8.5 18H15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LegalDocument01',
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
