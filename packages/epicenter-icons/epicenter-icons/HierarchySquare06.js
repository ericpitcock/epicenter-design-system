import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 6V3C16 2.44772 15.5523 2 15 2H9C8.44772 2 8 2.44772 8 3V6C8 6.55228 8.44772 7 9 7H15C15.5523 7 16 6.55228 16 6Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 21V18C7 17.4477 6.55228 17 6 17H3C2.44772 17 2 17.4477 2 18V21C2 21.5523 2.44772 22 3 22H6C6.55228 22 7 21.5523 7 21Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M22 21V18C22 17.4477 21.5523 17 21 17H18C17.4477 17 17 17.4477 17 18V21C17 21.5523 17.4477 22 18 22H21C21.5523 22 22 21.5523 22 21Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M14.5 12.5C14.5 13.8807 13.3807 15 12 15C10.6193 15 9.5 13.8807 9.5 12.5C9.5 11.1193 10.6193 10 12 10C13.3807 10 14.5 11.1193 14.5 12.5Z', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M12 7V10M9.5 13L4.5 17M14.5 13L19.5 17', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'HierarchySquare06',
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
