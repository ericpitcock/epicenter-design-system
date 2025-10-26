import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3.99988 21.0004L7.00059 17.9994', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.9999 9.99942L13.9999 10.9994', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18.0838 2.99942L14.5734 6.5099C13.8087 7.27461 13.8087 8.51446 14.5735 9.27911L15.7205 10.426C16.4852 11.1906 17.7249 11.1905 18.4895 10.4259L21.9999 6.91553', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M19.9999 4.99942L16.9999 7.99942', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M19.9999 20.9994L11.9999 12.9994M11.9999 12.9994L1.99988 2.99942C1.99988 6.84116 3.526 10.5255 6.24252 13.2421L8.99988 15.9994L11.9999 12.9994Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Restaurant03',
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
