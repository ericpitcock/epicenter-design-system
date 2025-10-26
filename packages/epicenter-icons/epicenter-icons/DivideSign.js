import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 12H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.5 5.5C14.5 6.88071 13.3807 8 12 8C10.6193 8 9.5 6.88071 9.5 5.5C9.5 4.11929 10.6193 3 12 3C13.3807 3 14.5 4.11929 14.5 5.5Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14.5 18.5C14.5 19.8807 13.3807 21 12 21C10.6193 21 9.5 19.8807 9.5 18.5C9.5 17.1193 10.6193 16 12 16C13.3807 16 14.5 17.1193 14.5 18.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DivideSign',
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
