import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 5.5H16.5C17.6046 5.5 18.5 6.39543 18.5 7.5V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4.5 3V5.5M4.5 9V17.5C4.5 18.6046 5.39543 19.5 6.5 19.5H14.5M18.5 19.5H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Crop',
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
