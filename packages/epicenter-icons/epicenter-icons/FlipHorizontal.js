import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 15.0568C2 15.8702 2.91937 16.3433 3.58124 15.8705L7.86077 12.8137C8.41912 12.4149 8.41912 11.5851 7.86077 11.1863L3.58124 8.12946C2.91937 7.65669 2 8.12982 2 8.94319L2 15.0568Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 15.0568C22 15.8702 21.0806 16.3433 20.4188 15.8705L16.1392 12.8137C15.5809 12.4149 15.5809 11.5851 16.1392 11.1863L20.4188 8.12946C21.0806 7.65669 22 8.12982 22 8.94319V15.0568Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12.002 14V10M12.002 6.5V3M12.002 21V17.5', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'FlipHorizontal',
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
