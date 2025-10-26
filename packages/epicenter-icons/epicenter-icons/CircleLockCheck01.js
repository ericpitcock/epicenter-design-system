import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 12C14.9041 9.63505 12.5526 8 9.82857 8C6.05725 8 3 11.134 3 15C3 18.866 6.05725 22 9.82857 22C10.1598 22 10.4855 21.9758 10.8041 21.9291', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.5 9.5V6.5C14.5 4.01472 12.4853 2 10 2C7.51472 2 5.5 4.01472 5.5 6.5V9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13.5 17.5L16 20L21 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CircleLockCheck01',
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
