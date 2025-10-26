import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7.5 17L8.7 13M14.5 17L13.3 13M8.7 13L10.5 7H11.5L13.3 13M8.7 13H13.3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 7V17L17 7V17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 7H4.5M7 7H4.5M4.5 17V7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Tan',
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
