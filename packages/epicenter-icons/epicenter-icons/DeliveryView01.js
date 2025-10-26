import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2.5 7.5V19.5C2.5 20.6046 3.39543 21.5 4.5 21.5H10.5M21.5 14.5V7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4.91739 3.47101L2.5 7.5H21.5L19.0826 3.47101C18.7212 2.8686 18.0701 2.5 17.3676 2.5L6.63238 2.5C5.92986 2.5 5.27884 2.8686 4.91739 3.47101Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 7.5V2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M10 10.5H14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M21.5 18.5C21.5 18.5 19.458 21.5 16.5 21.5C13.542 21.5 11.5 18.5 11.5 18.5C11.5 18.5 13.5 15.5 16.5 15.5C19.5 15.5 21.5 18.5 21.5 18.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M16.5 18.5H16.509', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DeliveryView01',
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
