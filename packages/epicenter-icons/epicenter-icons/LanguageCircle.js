import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10' })
const _hoisted2 = h('path', { 'd': 'M7 8.5H11.5M11.5 8.5H17M11.5 8.5V7M8.5 17C11 15 14 11 14.5 8.5M10 11C10.5 12.5 12.5 15 13.5 15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LanguageCircle',
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
