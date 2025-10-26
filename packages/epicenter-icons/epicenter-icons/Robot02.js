import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 20V16C20 11.5817 16.4183 8 12 8C7.58172 8 4 11.5817 4 16V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 8V5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '12', 'cy': '3.5', 'r': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M9 13V14M15 13V14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M4 18.5H9L10 17H14L15 18.5H20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Robot02',
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
