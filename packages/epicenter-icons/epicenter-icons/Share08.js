import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 6.5C21 8.15685 19.6569 9.5 18 9.5C16.3431 9.5 15 8.15685 15 6.5C15 4.84315 16.3431 3.5 18 3.5C19.6569 3.5 21 4.84315 21 6.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21 17.5C21 19.1569 19.6569 20.5 18 20.5C16.3431 20.5 15 19.1569 15 17.5C15 15.8431 16.3431 14.5 18 14.5C19.6569 14.5 21 15.8431 21 17.5Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M8.5 10.4995L15 7.5M8.5 13L15 15.9995', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Share08',
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
