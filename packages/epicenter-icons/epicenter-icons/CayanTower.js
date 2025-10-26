import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 22C18 19.8333 16.4136 15.3 14.9492 12.5C13.4848 9.7 12.3765 4.33333 11.9697 2L6.47299 4C4.64237 9.5 8.48152 15.6 11.8984 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 18H11.5M8 15.0185L10.5 15M7.5 12H10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 2L17.5719 4C18.5782 7 17.7186 10.362 15.9505 14.4155M6 22C6 20.2797 6.85094 17.152 8 14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M4 22H20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CayanTower',
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
