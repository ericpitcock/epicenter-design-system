import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 7H21', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 2.5L14 7', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10 2.5L7 7', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M10.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H19.5C20.6046 2.5 21.5 3.39543 21.5 4.5V10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M20.086 13.831C18.2898 12.8795 17 14.2821 17 14.2821C17 14.2821 15.7102 12.8795 13.9139 13.831C11.7383 14.9834 11.5821 19.4964 17 21.5C22.4179 19.4964 22.2616 14.9834 20.086 13.831Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PlayListFavourite01',
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
            _hoisted5
        ])
    }
})
