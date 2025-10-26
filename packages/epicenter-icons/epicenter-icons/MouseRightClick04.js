import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10.5 6V2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11 6H10C9.44772 6 9 6.44772 9 7V9C9 9.55228 9.44772 10 10 10H11C11.5523 10 12 9.55228 12 9V7C12 6.44772 11.5523 6 11 6Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M19 2C20.0547 3.13158 20.7646 4.50113 21 6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M10.5 22C16.5 22 18 17.49 18 12C18 6.50998 16.5 2 10.5 2C4.49993 2 3 6.50996 3 12C3 17.49 4.49993 22 10.5 22Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MouseRightClick04',
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
