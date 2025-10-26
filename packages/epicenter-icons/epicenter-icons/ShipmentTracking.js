import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 21C12 21.5523 11.5523 22 11 22H3C2.44772 22 2 21.5523 2 21V13C2 12.4477 2.44772 12 3 12H11C11.5523 12 12 12.4477 12 13V21Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 15H8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 14.5L18.0011 19.9995C18.0014 21.1042 17.1059 21.9999 16.0011 21.9999H14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M18.009 6H18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M18 2C15.7909 2 14 3.80892 14 6.04033C14 8.72258 16.7392 9.93189 18 12C19.3066 10.0006 22 8.67409 22 6.04033C22 3.80892 20.2091 2 18 2Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ShipmentTracking',
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
            _hoisted5
        ])
    }
})
