import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 18V6L14.5 2L20 4V20L14.5 22L4 18ZM4 18L14 18.5V6L8.5 7.5V15L4 18Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Office365',
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
