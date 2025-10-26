import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 14L4 19M4 19L3 22M4 19H7L8 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 14L20 19M20 19L21 22M20 19H17L16 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 10L12 22', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M11 22H13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M9 15L15 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M3 8V10H21V8C17.5 6 15 4.5 12 2C9 4.5 6.5 6 3 8Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Terrace',
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
            _hoisted5,
            _hoisted6
        ])
    }
})
