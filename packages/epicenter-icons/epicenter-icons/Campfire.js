import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 16C6 16 5 14.5 5 12C5 8 6.5 7 6.5 7C7.5 9 8.5 9 8.5 9C8.5 4 12 2 12 2C12 2 15.5 4 15.5 9C15.5 9 16.5 9 17.5 7C17.5 7 19 8 19 12C19 14.5 18 16 18 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 19H4V22H20V19Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14.5 16C14.5 13 12 11 12 11C12 11 9.5 13 9.5 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Campfire',
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
