import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 2L22 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18.5 18.5V20C18.5 21.1046 17.6046 22 16.5 22H7.5C6.39543 22 5.5 21.1046 5.5 20V5.5M6.35793 2.35793C6.68173 2.1323 7.07542 2 7.5 2H16.5C17.6046 2 18.5 2.89543 18.5 4V14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14 2H10L10.5 3H13.5L14 2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PhoneOff01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
