import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V6.5H21.5V14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4.9 3.3L2.5 6.5H21.5L19.1 3.3C18.7223 2.79639 18.1295 2.5 17.5 2.5H6.5C5.87049 2.5 5.27771 2.79639 4.9 3.3Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21.5 18.5C21.5 18.5 19.458 21.5 16.5 21.5C13.542 21.5 11.5 18.5 11.5 18.5C11.5 18.5 13.5 15.5 16.5 15.5C19.5 15.5 21.5 18.5 21.5 18.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M16.5 18.5H16.509', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DeliveryView02',
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
