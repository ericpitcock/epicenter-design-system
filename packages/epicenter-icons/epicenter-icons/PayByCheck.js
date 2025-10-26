import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6.5 11H4C2.89543 11 2 11.8954 2 13V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V13C22 11.8954 21.1046 11 20 11V11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 18H18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10 14H13L21 6L18 3L10 11V14Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PayByCheck',
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
