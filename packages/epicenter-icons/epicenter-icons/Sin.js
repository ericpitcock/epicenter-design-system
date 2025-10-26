import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10 7H12M14 7H12M14 17H12M10 17H12M12 7V17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 7V17L17 7V17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6.5 8.5C6.20141 7.60421 5.3631 7 4.41886 7H4.32456C3.04074 7 2 8.04074 2 9.32456V9.5C2 10.8807 3.11929 12 4.5 12C5.88071 12 7 13.1193 7 14.5V14.6754C7 15.9593 5.95926 17 4.67544 17H4.58114C3.6369 17 2.79859 16.3958 2.5 15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Sin',
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
