import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 8V5C22 3.89543 21.1046 3 20 3H4C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 12V20C16 20.5523 16.4477 21 17 21H21C21.5523 21 22 20.5523 22 20V12C22 11.4477 21.5523 11 21 11H17C16.4477 11 16 11.4477 16 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10 21H8M10 21C10.8284 21 11.5 20.3284 11.5 19.5V17L12 17M10 21H12.5V17L12 17M12 17V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ComputerPhoneSync',
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
