import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.8705 20.4188L12.8137 16.1392C12.4149 15.5809 11.5851 15.5809 11.1863 16.1392L8.12946 20.4188C7.65669 21.0806 8.12982 22 8.94319 22H15.0568C15.8702 22 16.3433 21.0806 15.8705 20.4188Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.0568 2C15.8702 2 16.3433 2.91937 15.8705 3.58124L12.8137 7.86077C12.4149 8.41912 11.5851 8.41912 11.1863 7.86077L8.12946 3.58124C7.65669 2.91937 8.12982 2 8.94319 2H15.0568Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10 12H14M17.5 12H21M3 12H6.5', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'FlipVertical',
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
