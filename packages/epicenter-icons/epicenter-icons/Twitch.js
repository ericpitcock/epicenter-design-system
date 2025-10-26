import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16.001 7L16 11M12.001 7L12 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 3H4V16.5L7 16.5226V21L11.0355 16.5226H17.0094L20 13.5V3Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Twitch',
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
