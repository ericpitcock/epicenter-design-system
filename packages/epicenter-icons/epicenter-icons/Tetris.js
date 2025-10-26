import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10 3H8C7.44772 3 7 3.44772 7 4V10C7 10.5523 7.44772 11 8 11H10C10.5523 11 11 10.5523 11 10V4C11 3.44772 10.5523 3 10 3Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 21C20.5523 21 21 20.5523 21 20V18C21 17.4477 20.5523 17 20 17L10 17C9.44772 17 9 17.4477 9 18L9 20C9 20.5523 9.44771 21 10 21L20 21Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 17V14C17 13.4477 16.5523 13 16 13L14 13C13.4477 13 13 13.4477 13 14L13 17', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M6 7H4C3.44772 7 3 7.44772 3 8V14C3 14.5523 3.44772 15 4 15H6C6.55228 15 7 14.5523 7 14V8C7 7.44772 6.55228 7 6 7Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Tetris',
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
