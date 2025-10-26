import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 12C6.47715 12 2 16.4772 2 22H22C22 16.4772 17.5228 12 12 12Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.9998 17H15.0088', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 22C12 20.3431 10.6569 19 9 19C7.34315 19 6 20.3431 6 22' })
const _hoisted4 = h('path', { 'd': 'M12 12V7.5M12 7.5V2H19C19.5523 2 20 2.44772 20 3V6.5C20 7.05228 19.5523 7.5 19 7.5H12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MoonLanding',
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
