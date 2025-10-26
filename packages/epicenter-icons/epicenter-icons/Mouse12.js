import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 22C17.6 22 19 18.1665 19 13.5C19 8.83348 17.6 5 12 5C6.39994 5 5 8.83346 5 13.5C5 18.1665 6.39994 22 12 22Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 8V2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12.5 8H11.5C10.9477 8 10.5 8.44772 10.5 9V11C10.5 11.5523 10.9477 12 11.5 12H12.5C13.0523 12 13.5 11.5523 13.5 11V9C13.5 8.44772 13.0523 8 12.5 8Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Mouse12',
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
