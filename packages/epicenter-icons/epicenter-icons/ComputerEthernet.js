import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 21H9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 17H12.5V21H12M12 17H11.5V21H12M12 17V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14 3H4C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M19 10H20C21.1046 10 22 9.10457 22 8V5.5H17V8C17 9.10457 17.8954 10 19 10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M19.5 10V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M17 5.5H22V3.5C22 3.22386 21.7761 3 21.5 3H17.5C17.2239 3 17 3.22386 17 3.5V5.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ComputerEthernet',
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
            _hoisted5,
            _hoisted6
        ])
    }
})
