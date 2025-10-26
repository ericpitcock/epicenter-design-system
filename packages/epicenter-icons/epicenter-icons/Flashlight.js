import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 3H8C7.44772 3 7 3.44772 7 4V6C7 7.04416 7.27249 8.07025 7.79054 8.97683L9 11V20C9 20.5523 9.44772 21 10 21H14C14.5523 21 15 20.5523 15 20V11L16.2095 8.97683C16.7275 8.07025 17 7.04416 17 6V4C17 3.44772 16.5523 3 16 3Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 6H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 13V15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Flashlight',
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
