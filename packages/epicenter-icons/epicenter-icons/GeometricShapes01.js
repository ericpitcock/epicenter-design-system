import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.5809 9.25487L17.9358 2.77473C17.7446 2.43491 17.2554 2.43491 17.0642 2.77473L13.4191 9.25487C13.2317 9.58817 13.4725 10 13.8549 10H21.1451C21.5275 10 21.7683 9.58817 21.5809 9.25487Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 2H3C2.44772 2 2 2.44772 2 3V9C2 9.55228 2.44772 10 3 10H9C9.55228 10 10 9.55228 10 9V3C10 2.44772 9.55228 2 9 2Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '18', 'cy': '18', 'r': '4', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M9.99994 14.5L3 21.5M3.00006 14.5L10 21.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'GeometricShapes01',
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
