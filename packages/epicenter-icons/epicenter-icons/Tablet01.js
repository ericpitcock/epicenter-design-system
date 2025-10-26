import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17.5 2H6.5C4.84315 2 3.5 3.34315 3.5 5V19C3.5 20.6569 4.84315 22 6.5 22H17.5C19.1569 22 20.5 20.6569 20.5 19V5C20.5 3.34315 19.1569 2 17.5 2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 19H12.01', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'Tablet01',
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
