import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 2C14.2026 2.60753 13.1571 3.00292 12.0099 3.00292C10.8626 3.00292 9.79744 2.60753 9 2' })
const _hoisted2 = h('path', { 'd': 'M4 9V21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21V9C19 8.5 17.5 7 17.5 3L15 2C15 5 14 7.40702 12 7.40702C10 7.40702 9 5 9 2L6.5 3C6.5 7 5 8.5 4 9Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Sleeveless',
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
