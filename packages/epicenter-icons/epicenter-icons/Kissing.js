import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.9996 12C21.9892 6.58607 17.4772 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C13.0452 22 14.053 21.8396 15 21.5422', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8.00897 9H8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M10 14C10.5 14 12 14 13 15L12 16L13 17C12 18 10.5 18 10 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M21.4553 15.2133C20.4565 14.2109 19.5 15.0001 19.5 15.0001C19.5 15.0001 18.7848 13.7273 17.4556 14.0563C15.8456 14.4547 14.9972 17.5001 17.9999 20.0001C22 19.5001 22.665 16.4274 21.4553 15.2133Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Kissing',
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
