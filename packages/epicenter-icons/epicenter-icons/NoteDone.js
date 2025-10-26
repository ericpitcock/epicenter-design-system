import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.5 2V5M6.5 2V5M11 2V5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 14.5V5.5C19 4.39543 18.1046 3.5 17 3.5H5C3.89543 3.5 3 4.39543 3 5.5V20C3 21.1046 3.89543 22 5 22H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7 15H11M7 11H15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M21 17L16 22L14 20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'NoteDone',
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
