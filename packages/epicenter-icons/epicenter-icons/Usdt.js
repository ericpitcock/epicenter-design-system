import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13.5 9.02234C18.3113 9.16708 22 9.99738 22 11C22 12.1046 17.5228 13 12 13C6.47715 13 2 12.1046 2 11C2 9.99738 5.68874 9.16708 10.5 9.02234', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13.5 10.4776V6H19.5V3H4.5V6H10.5V10.4776M13.5 12.9776V21H10.5V12.9776', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Usdt',
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
