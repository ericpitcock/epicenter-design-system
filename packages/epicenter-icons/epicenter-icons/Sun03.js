import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.9982 2V4M11.9982 20V22M18.9981 5.00098L17.499 6.5M6.5 17.5L5 19M22 12H20M4 12H2M19 19.001L17.5 17.501M6.49902 6.5L5 5.00098', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Sun03',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
