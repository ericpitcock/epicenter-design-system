import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16.5 2V5M7.5 2V5M12 2V5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 3.5H6C4.89543 3.5 4 4.39543 4 5.5V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V5.5C20 4.39543 19.1046 3.5 18 3.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 15H12M8 11H16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Note01',
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
