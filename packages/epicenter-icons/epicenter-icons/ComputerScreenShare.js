import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 3H4C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H20C21.1046 17 22 16.1046 22 15V5C22 3.89543 21.1046 3 20 3Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13.5 7L16 9.5L13.5 12M15 9.5H11C9.89543 9.5 9 10.3954 9 11.5V13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14 21H16M14 21C13.1716 21 12.5 20.3284 12.5 19.5V17L12 17M14 21H10M10 21H8M10 21C10.8284 21 11.5 20.3284 11.5 19.5V17L12 17M12 17V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ComputerScreenShare',
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
