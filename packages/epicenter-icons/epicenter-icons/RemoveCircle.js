import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 12.0001C22 6.47721 17.5228 2.00006 12 2.00006C6.47715 2.00006 2 6.47721 2 12.0001C2 17.5229 6.47715 22.0001 12 22.0001C17.5228 22.0001 22 17.5229 22 12.0001Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 12.0001L8 12.0001', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'RemoveCircle',
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
