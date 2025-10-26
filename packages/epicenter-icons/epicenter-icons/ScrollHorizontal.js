import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14.0022 11.9959C14.0022 13.0993 13.1072 13.9937 12.003 13.9937C10.8989 13.9937 10.0039 13.0993 10.0039 11.9959C10.0039 10.8925 10.8989 9.99805 12.003 9.99805C13.1072 9.99805 14.0022 10.8925 14.0022 11.9959Z' })
const _hoisted2 = h('path', { 'd': 'M8 16L2 12L8 8L6.5 12L8 16Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 16L22 12L16 8L17.5 12L16 16Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ScrollHorizontal',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
