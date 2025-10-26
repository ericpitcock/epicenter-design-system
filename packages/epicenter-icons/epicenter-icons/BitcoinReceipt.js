import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 21.5V4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V21.5L16 19.5L12 22L8 19.5L4 21.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9.5 8H10.5M13 11H10.5M13 11C13.8284 11 14.5 10.3284 14.5 9.5C14.5 8.67157 13.8284 8 13 8H12M13 11C13.8284 11 14.5 11.6716 14.5 12.5C14.5 13.3284 13.8284 14 13 14H12M10.5 11V8M10.5 11V14M9.5 14H10.5M10.5 8H12M10.5 14H12M12 8V7M12 14V15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BitcoinReceipt',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
