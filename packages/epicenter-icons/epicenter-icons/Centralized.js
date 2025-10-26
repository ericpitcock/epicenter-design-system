import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11.9998 7C9.23833 7 6.99976 9.23857 6.99976 12C6.99976 14.7614 9.23833 17 11.9998 17C14.7612 17 16.9998 14.7614 16.9998 12C16.9998 9.23858 14.7612 7 11.9998 7Z' })
const _hoisted2 = h('path', { 'd': 'M20.9998 17.5H17.4998V21M21.4998 21.5L17.9302 17.9305', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 17.5H6.5V21M2.5 21.5L6.06952 17.9305', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M21 6.5H17.5V3M21.5 2.5L17.9305 6.06952', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M3 6.5H6.5V3M2.5 2.5L6.06952 6.06952', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Centralized',
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
