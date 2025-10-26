import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.0001 13C21.0001 17.9706 16.9707 22 12.0001 22C7.02956 22 3.00012 17.9706 3.00012 13C3.00012 8.02944 7.02956 4 12.0001 4C16.9707 4 21.0001 8.02944 21.0001 13Z' })
const _hoisted2 = h('path', { 'd': 'M12 4V2', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10 2H14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7 12L15 9.5L12.5 17.5L11 13.5L7 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Compass',
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
            _hoisted4
        ])
    }
})
