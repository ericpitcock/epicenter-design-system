import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 8C6.10457 8 7 7.10457 7 6C7 4.89543 6.10457 4 5 4C3.89543 4 3 4.89543 3 6C3 7.10457 3.89543 8 5 8Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 7V7C21 5.34315 19.6569 4 18 4H14C12.3431 4 11 5.34315 11 7V17C11 18.6569 12.3431 20 14 20H18C19.6569 20 21 18.6569 21 17V17', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'Celsius',
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
