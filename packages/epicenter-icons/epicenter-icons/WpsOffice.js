import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13.5 14.5L15.5 18.5H16L22 6V5.5H15L12 11.5L8.5 18.5H8L2 6V5.5H9L10.5 8.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'WpsOffice',
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
