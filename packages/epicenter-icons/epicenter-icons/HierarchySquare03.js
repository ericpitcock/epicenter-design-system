import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 21V17C8 16.4477 7.55228 16 7 16H3C2.44772 16 2 16.4477 2 17V21C2 21.5523 2.44772 22 3 22H7C7.55228 22 8 21.5523 8 21Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 21V17C22 16.4477 21.5523 16 21 16H17C16.4477 16 16 16.4477 16 17V21C16 21.5523 16.4477 22 17 22H21C21.5523 22 22 21.5523 22 21Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 9V3C16 2.44772 15.5523 2 15 2H9C8.44772 2 8 2.44772 8 3V9C8 9.55229 8.44772 10 9 10H15C15.5523 10 16 9.55229 16 9Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M19 16L18.9999 14.9998C18.9998 13.8953 18.1044 13 16.9999 13L6.99998 13.0001C5.89542 13.0001 5 13.8955 5 15.0001L5 16', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'HierarchySquare03',
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
