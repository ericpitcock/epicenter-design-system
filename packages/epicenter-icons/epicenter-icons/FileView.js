import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 13V9L12 2H5C3.89543 2 3 2.89543 3 4V20C3 21.1046 3.89543 22 5 22H9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 2V7C12 8.10457 12.8954 9 14 9H19', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 22C18.7614 22 21 19 21 19C21 19 18.7614 16 16 16C13.2386 16 11 19 11 19C11 19 13.2386 22 16 22Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15.9922 19H16.0012', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FileView',
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
