import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3.35982 12.2002L6 10H18L20.6402 12.2002C20.8682 12.3901 21 12.6716 21 12.9684L21 13.0316C21 13.3284 20.8682 13.6099 20.6402 13.7998L18 16H6L3.35982 13.7998C3.13182 13.6099 3 13.3284 3 13.0316V12.9684C3 12.6716 3.13182 12.3901 3.35982 12.2002Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8.01193 13H8M12.006 13H11.994M16 13H15.9881', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M18 16L18.7721 18.3162C18.9082 18.7246 19.2903 19 19.7208 19H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M6 16L5.22792 18.3162C5.09181 18.7246 4.70967 19 4.27924 19H3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Ufo01',
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
