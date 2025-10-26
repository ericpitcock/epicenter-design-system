import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '8.5', 'cy': '16.5', 'r': '5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '15.5', 'cy': '16.5', 'r': '5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 9C12 9 16 7.14706 16 4.13889C16 2.95761 15.1579 2 14 2C13.0526 2 12.4211 2.41176 12 3.23529C11.5789 2.41176 10.9474 2 10 2C8.84211 2 8 2.95761 8 4.13889C8 7.14706 12 9 12 9Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Wedding',
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
