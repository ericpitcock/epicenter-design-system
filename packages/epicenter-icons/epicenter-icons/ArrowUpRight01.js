import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17.5 15V6.5H9.00003M17.0714 6.9286L6.50003 17.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ArrowUpRight01',
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
