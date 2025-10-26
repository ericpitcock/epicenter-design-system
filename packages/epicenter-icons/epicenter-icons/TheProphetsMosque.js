import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 22H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17.5125 6C15.9698 4 18.3389 3 19 2C19.6611 3 22.0302 4 20.4875 6H17.5125Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17.5 6L17 17M17 22H21L20.5 6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M11.0006 8C12.984 10.25 16.9992 11 16.9992 17H5C5 11 9.01516 10.25 10.9986 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M3 22V19C3 17.8954 3.89543 17 5 17H17C18.1046 17 19 17.8954 19 19V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TheProphetsMosque',
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
