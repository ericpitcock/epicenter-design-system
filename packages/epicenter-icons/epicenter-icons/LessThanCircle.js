import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13.5 9L10.5 12L13.5 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10' })

export default defineComponent({
    name: 'LessThanCircle',
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
