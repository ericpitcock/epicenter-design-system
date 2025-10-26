import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11 7V3C11 2.44772 10.5523 2 10 2H4C3.44772 2 3 2.44772 3 3V7C3 7.55228 3.44772 8 4 8H10C10.5523 8 11 7.55228 11 7Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 13V10C20 9.44772 19.5523 9 19 9H15C14.4477 9 14 9.44772 14 10V13C14 13.5523 14.4477 14 15 14H19C19.5523 14 20 13.5523 20 13Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20 21V18C20 17.4477 19.5523 17 19 17H15C14.4477 17 14 17.4477 14 18V21C14 21.5523 14.4477 22 15 22H19C19.5523 22 20 21.5523 20 21Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M14 19.5H9C7.89543 19.5 7 18.6046 7 17.5V11.5M7 8V11.5M7 11.5H14', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'HierarchySquare01',
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
