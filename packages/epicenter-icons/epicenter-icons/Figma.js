import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '15', 'cy': '12', 'r': '3', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 21C10.6569 21 12 19.6569 12 18V15H9C7.34315 15 6 16.3431 6 18C6 19.6569 7.34315 21 9 21Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 9V15H9C7.34315 15 6 13.6569 6 12C6 10.3431 7.34315 9 9 9H12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 3V9H9C7.34315 9 6 7.65685 6 6C6 4.34315 7.34315 3 9 3H12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M12 3V9H15C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3H12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Figma',
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
            _hoisted4,
            _hoisted5
        ])
    }
})
