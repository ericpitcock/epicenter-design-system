import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18.5 2V5M6.5 2V5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 3.5H5C3.89543 3.5 3 4.39543 3 5.5V20C3 21.1046 3.89543 22 5 22H20C21.1046 22 22 21.1046 22 20V5.5C22 4.39543 21.1046 3.5 20 3.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15.4925 16.4316C14.9275 17.3692 13.8994 17.9964 12.725 17.9964C10.9417 17.9964 9.49609 16.5508 9.49609 14.7675C9.49609 13.593 10.1232 12.565 11.0609 12', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M14.5 12.999H14.509', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M3 8.5H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'RamadhanMonth',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 25 24',
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
