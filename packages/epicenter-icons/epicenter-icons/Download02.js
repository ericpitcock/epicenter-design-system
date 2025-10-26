import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 12L12 16L16 12M12 15L12 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 8C19.2091 8 21 9.79086 21 12V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V12C3 9.79086 4.79086 8 7 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Download02',
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
