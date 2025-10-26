import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 18V9.5C19 5.63401 15.866 2.5 12 2.5C8.13401 2.5 5 5.63401 5 9.5V18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20.5 18H3.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13.5 20C13.5 20.8284 12.8284 21.5 12 21.5M10.5 20C10.5 20.8284 11.1716 21.5 12 21.5M12 21.5V20', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Notification02',
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
