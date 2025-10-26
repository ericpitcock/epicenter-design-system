import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 3.5H6C4.89543 3.5 4 4.39543 4 5.5V20C4 21.1046 4.89543 22 6 22H14L20 16V5.5C20 4.39543 19.1046 3.5 18 3.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 14H11.5M8 10H16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20 16H16C14.8954 16 14 16.8954 14 18V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M16.5 2V5M7.5 2V5M12 2V5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Note02',
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
