import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2.5 12L9.89117 3.02931C11.0219 1.6569 12.9781 1.6569 14.1088 3.02931L21.5 12H2.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 7.99973C9 9.50704 10.821 5.21758 13.5794 7.90971C15 9.29611 16.4164 9.20289 18 8.50217', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10.0001 21.9999V17.9999C10.0001 16.8953 10.8956 15.9999 12.0001 15.9999C13.1047 15.9999 14.0001 16.8953 14.0001 17.9999V21.9999', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M19.5 11.9999L19.5 21.9999L4.5 22L4.5 11.9999', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Trulli',
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
