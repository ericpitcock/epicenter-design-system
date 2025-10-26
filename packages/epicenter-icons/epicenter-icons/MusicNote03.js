import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10 18.5C10 20.433 8.433 22 6.5 22C4.567 22 3 20.433 3 18.5C3 16.567 4.567 15 6.5 15C8.433 15 10 16.567 10 18.5ZM10 18.5V5L21 2V16M21 16C21 17.6569 19.6569 19 18 19C16.3431 19 15 17.6569 15 16C15 14.3431 16.3431 13 18 13C19.6569 13 21 14.3431 21 16Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 11L21 8', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MusicNote03',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
