import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 21H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 21C4.5 18 5.5 14 5.5 8H12.5C12.5 14 13.5 18 15 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20 21C18 19 16.5 16 16.5 12H13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 4.26495C13.1704 2.62795 14.6678 2.62795 15.8382 4.26495C16.5439 5.26947 17.4561 5.23227 18.179 4.22775C19.3322 2.59075 20.8296 2.59075 22 4.22775', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Factory01',
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
