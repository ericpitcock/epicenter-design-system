import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6.5 9H11M11 9H16.5M11 9V7.5M8 17.5C10.5 15.5 13.5 11.5 14 9M9.5 11.5C10 13 12 15.5 13 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 3H4C2.89543 3 2 3.89543 2 5V20C2 21.1046 2.89543 22 4 22H19C20.1046 22 21 21.1046 21 20V5C21 3.89543 20.1046 3 19 3Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LanguageSquare',
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
