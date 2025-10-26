import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11.0809 13.152L8 7L13.4196 11.2796C14.1901 11.888 14.1941 13.0472 13.4277 13.6607C12.6614 14.2743 11.5189 14.0266 11.0809 13.152Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 4.85857C3.14864 6.67349 2 9.20261 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Timer01',
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
