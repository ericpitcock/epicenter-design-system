import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 16C6.89543 16 6 15.1046 6 14L6 4.00133C6 2.89624 6.89624 2.0006 8.00133 2.00133L20.0013 2.00931C21.1054 2.01004 22 2.90525 22 4.0093L22 14C22 15.1046 21.1046 16 20 16H8Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 7.0057L4.00285 7.00285C2.89717 7.00128 2 7.89717 2 9.00285L2 20C2 21.1046 2.89543 22 4 22H16C17.1046 22 18 21.1046 18 20V16.5', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ChangeScreenMode',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
