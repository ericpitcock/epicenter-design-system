import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9 8C7.7945 8.85994 7 10.3304 7 12C7 13.6696 7.7945 15.1401 9 16M15 8C16.2055 8.85994 17 10.3304 17 12C17 13.6696 16.2055 15.1401 15 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Num1stBracketCircle',
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
