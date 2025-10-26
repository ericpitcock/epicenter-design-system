import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z' })
const _hoisted2 = h('path', { 'd': 'M12 22C15.3137 22 18 17.5228 18 12C18 6.47715 15.3137 2 12 2' })
const _hoisted3 = h('path', { 'd': 'M10.9998 7H11.0088', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M10 14.5C10 15.3284 9.32843 16 8.5 16C7.67157 16 7 15.3284 7 14.5C7 13.6716 7.67157 13 8.5 13C9.32843 13 10 13.6716 10 14.5Z', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'Moon',
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
