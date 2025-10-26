import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17.0001 2.00039L7.00007 2.00007C5.89547 2.00003 5 2.89547 5 4.00007V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4.0004C19 2.89585 18.1046 2.00043 17.0001 2.00039Z', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M9.5 7H10.5M13 10H10.5M13 10C13.8284 10 14.5 9.32843 14.5 8.5C14.5 7.67157 13.8284 7 13 7H12M13 10C13.8284 10 14.5 10.6716 14.5 11.5C14.5 12.3284 13.8284 13 13 13H12M10.5 10V7M10.5 10V13M9.5 13H10.5M10.5 7H12M10.5 13H12M12 7V6M12 13V14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 19H12.0001', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BitcoinSmartphone02',
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
