import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.5 10.9343C14.9347 11.8725 13.906 12.5 12.7308 12.5C10.9465 12.5 9.5 11.0535 9.5 9.26923C9.5 8.094 10.1275 7.06534 11.0657 6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.5 8H14.5001', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20.5 22H6.5C5.39543 22 4.5 21.1046 4.5 20M4.5 20C4.5 18.8954 5.39543 18 6.5 18H20.5V2H6.5C5.39543 2 4.5 2.89543 4.5 4V20ZM20 18C20 18 19 18.7628 19 20C19 21.2372 20 22 20 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Quran03',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 25 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
