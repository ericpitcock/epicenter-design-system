import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 8.5V5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 22C18 22 19.5 17.49 19.5 12C19.5 6.50998 18 2 12 2C5.99993 2 4.5 6.50996 4.5 12C4.5 17.49 5.99993 22 12 22Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Mouse09',
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
