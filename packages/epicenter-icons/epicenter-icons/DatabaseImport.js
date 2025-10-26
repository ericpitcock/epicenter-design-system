import { defineComponent, h } from 'vue'

const _hoisted1 = h('ellipse', { 'cx': '12', 'cy': '5', 'rx': '8', 'ry': '3', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 12C4 13.5418 7.48993 14.8141 12 15', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M7 11C7.60158 11.1808 8.27434 11.3898 9 11.5', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M7 18C7.60158 18.1808 8.27434 18.3898 9 18.5', 'stroke-linecap': 'round' })
const _hoisted5 = h('path', { 'd': 'M12 22C7.58172 22 4 20.6569 4 19V5M20 5V11.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M15 19L17.5 21.5L20 19M17.5 14V20.8912', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DatabaseImport',
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
            _hoisted5,
            _hoisted6
        ])
    }
})
