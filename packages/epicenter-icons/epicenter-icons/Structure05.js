import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10 7V3C10 2.44772 9.55229 2 9 2H3C2.44772 2 2 2.44772 2 3V7C2 7.55228 2.44772 8 3 8H9C9.55229 8 10 7.55228 10 7Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 11V7C22 6.44772 21.5523 6 21 6H16C15.4477 6 15 6.44772 15 7V11C15 11.5523 15.4477 12 16 12H21C21.5523 12 22 11.5523 22 11Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21 21V17C21 16.4477 20.5523 16 20 16H14C13.4477 16 13 16.4477 13 17V21C13 21.5523 13.4477 22 14 22H20C20.5523 22 21 21.5523 21 21Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15 7L10 5L13.5714 16', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Structure05',
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
