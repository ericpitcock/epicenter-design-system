import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 15C16 17.2091 14.2091 19 12 19C9.79085 19 8 17.2091 8 15C8 12.7909 9.79085 11 12 11C14.2091 11 16 12.7909 16 15Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 5V6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 22C15.866 22 19 18.8659 19 15C19 12.13 17.8977 6.3565 17.3298 3.57231C17.142 2.65154 16.3303 2 15.3905 2H8.60946C7.66974 2 6.85802 2.65154 6.6702 3.57231C6.10228 6.3565 5 12.13 5 15C5 18.8659 8.13399 22 12 22Z', 'stroke-linecap': 'square' })

export default defineComponent({
    name: 'KeyGeneratorFob',
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
