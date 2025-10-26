import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.3005 21C21.063 21 21.5449 20.1809 21.1746 19.5144L12.8742 4.57348C12.4932 3.88767 11.5068 3.88767 11.1258 4.57348L2.82536 19.5144C2.45506 20.1809 2.93703 21 3.69951 21H20.3005Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 15L5 15M16.1818 10L8 10' })

export default defineComponent({
    name: 'PyramidStructure02',
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
