import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9.5 3H10.5M12.75 6.5H10.5M12.75 6.5C13.7165 6.5 14.5 5.7165 14.5 4.75C14.5 3.7835 13.7165 3 12.75 3H12M12.75 6.5C13.7165 6.5 14.5 7.2835 14.5 8.25C14.5 9.2165 13.7165 10 12.75 10H12M10.5 6.5V3M10.5 6.5V10M9.5 10H10.5M10.5 3H12M10.5 10H12M12 3V2M12 10V11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 7H3V10L9.5 16V22L14.5 20V16L21 10V7H18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BitcoinFilter',
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
