import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '9', 'cy': '4', 'r': '2', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '19', 'cy': '7', 'r': '2', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '20', 'cy': '20', 'r': '2', 'stroke-linejoin': 'round' })
const _hoisted4 = h('circle', { 'cx': '4', 'cy': '18', 'r': '2', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M11 5L17 6.5M19 9L20 18.2743M18 20L6 18.5M8 6L4.5 16', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Skew',
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
