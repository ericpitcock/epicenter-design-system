import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 8.4L12.8742 4.57348C12.4932 3.88767 11.5068 3.88767 11.1258 4.57348L2.82536 19.5144C2.45506 20.1809 2.93703 21 3.69951 21H20.3005C21.063 21 21.5449 20.1809 21.1746 19.5144L18.3889 14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 7L8 10L22 16M21.5 11.5L9.58117 10.1762', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 10L2 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Prism01',
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
