import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 21V14C6 12.3279 7.60319 11.4659 9 11.0472C9.04786 11.0329 9.05246 10.9458 9.00628 10.9257C7.46282 10.2529 6 9.74997 6 7.80847C6 5.93718 7.27312 4.43992 8.75497 3.69556C9.65563 3.23185 10.7241 3 11.9603 3C13.0375 3 14.0353 3.20161 14.9536 3.60484C16.9456 4.43574 18 6.43605 18 8.71573V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'AlphabetThai',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1
        ])
    }
})
