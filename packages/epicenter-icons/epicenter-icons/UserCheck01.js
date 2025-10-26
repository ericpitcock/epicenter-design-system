import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 7C15 4.23858 12.7614 2 10 2C7.23858 2 5 4.23858 5 7C5 9.76142 7.23858 12 10 12C12.7614 12 15 9.76142 15 7Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 19C3 15.134 6.13401 12 10 12C11.9587 12 13.7295 12.8045 15 14.101', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13 17.5L15.5 20L21 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'UserCheck01',
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
