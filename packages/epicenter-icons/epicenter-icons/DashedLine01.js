import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 12H4.5M7.5 12H10M13 12H15.5M18.5 12H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DashedLine01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1
        ])
    }
})
