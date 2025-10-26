import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 15V4C19 2.89543 18.1046 2 17 2H5C3.89543 2 3 2.89543 3 4V20C3 21.1046 3.89543 22 5 22L12 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.5 2H7.5V3.5C7.5 4.32843 8.17157 5 9 5H13C13.8284 5 14.5 4.32843 14.5 3.5V2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7 15H11M7 11H15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M21 17L16 22L14 20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TaskDone02',
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
