import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.3005 3C21.063 3 21.5449 3.81911 21.1746 4.48564L12.8742 19.4265C12.4932 20.1123 11.5068 20.1123 11.1258 19.4265L2.82536 4.48564C2.45506 3.81911 2.93703 3 3.69951 3H20.3005Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 9L5 9M16.1818 14L8 14', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Pipeline',
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
