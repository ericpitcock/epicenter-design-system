import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.5858 12.0858L13.9142 6.41421C13.1332 5.63316 11.8668 5.63317 11.0858 6.41421L5.41421 12.0858C4.63316 12.8668 4.63317 14.1332 5.41421 14.9142L11.0858 20.5858C11.8668 21.3668 13.1332 21.3668 13.9142 20.5858L19.5858 14.9142C20.3668 14.1332 20.3668 12.8668 19.5858 12.0858Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 9L12.5 13.5M12.5 13.5L8 18M12.5 13.5L8 9M12.5 13.5L17 18', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15.5 2C13 2 12.5 5.5 12.5 5.5C12.5 5.5 11.5 3 9.5 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Ketupat',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 25 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
