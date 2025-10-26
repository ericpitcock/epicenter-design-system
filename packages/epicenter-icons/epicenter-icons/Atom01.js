import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 8.5H20.99M3.00995 8.5H3M12 21.5H11.99', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7.77778 20.5C4.84996 19.0788 2.85799 16.2638 2.5 13.0416M16.2222 20.5C19.15 19.0788 21.142 16.2638 21.5 13.0416M5.87777 4.63781C9.37758 1.7874 14.4113 1.7874 17.9111 4.63781', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Atom01',
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
