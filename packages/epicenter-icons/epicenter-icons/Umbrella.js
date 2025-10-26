import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 3.5V2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 3.5C16.9706 3.5 21 6.97715 21 12.5H3C3 6.97715 7.02944 3.5 12 3.5Z', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 3.5C14.2091 3.5 16 6.97715 16 12.5H8C8 6.97715 9.79086 3.5 12 3.5Z', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 12.5V20.5C12 21.3284 11.3284 22 10.5 22C9.67157 22 9 21.3284 9 20.5V20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Umbrella',
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
