import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 8.67619L12 5.5L6 8.67619M18 8.67619V15.5L12 18.5L6 15V8.67619M18 8.67619L12 11.5M12 11.5L6 8.67619M12 11.5V17.9893', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 6.5L12 2L3 6.5V17.5L12 22L21 17.5V6.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Blockchain03',
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
