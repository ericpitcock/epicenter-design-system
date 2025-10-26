import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 14H4C2.89543 14 2 14.8954 2 16V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20L22 16C22 14.8954 21.1046 14 20 14Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 18H22', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 18L12 14M7 22V18M17 22L17 18', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M19 11C19 10 17.9809 8.63931 16.499 7.6C12.5064 4.8 12.0628 2 12.0628 2C12.0628 2 7.94433 5.6 10.2883 10C8.15899 10.32 7.16797 8 6.93863 6.8C5.95522 8.08998 4.96435 9 5.00093 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Firewall',
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
